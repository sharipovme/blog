import { useAuth } from "@/store/auth";
import React, { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "admin" | "editor";
type PermissionAction = "*" | "read" | "write" | "delete";
type Permission = {
  action: PermissionAction | PermissionAction[];
  resource: string;
};
type Roles = Record<UserRole, Permission[]>;

interface CanProps {
  i: string;
  children: React.ReactNode;
  redirect?: boolean;
}

const roles: Roles = {
  admin: [{ action: ["read"], resource: "blog" }],
  editor: [{ action: "*", resource: "blog" }],
};

const hasPermission = (i: string, role: keyof Roles): boolean => {
  const [resource, action] = i.split(".");

  if (!role || !(role in roles)) return false;

  const rolePermissions = roles[role]?.find(
    (perm) => perm.resource === resource
  )?.action;

  if (rolePermissions) {
    if (rolePermissions === "*") {
      return true;
    }

    if (Array.isArray(rolePermissions)) {
      return rolePermissions.includes(action as PermissionAction);
    }

    return rolePermissions === action;
  }

  return false;
};

const Can = ({ i, children, redirect = false }: CanProps) => {
  const { role } = useAuth();
  const navigate = useNavigate();

  const isAllowed = useMemo(() => {
    if (!role || !(role in roles)) {
      return false;
    }
    return hasPermission(i, role as UserRole);
  }, [i, role]);

  useEffect(() => {
    if (!isAllowed && redirect) {
      localStorage.clear();
      navigate("/login");
    }
  }, [isAllowed, redirect, navigate]);

  return isAllowed ? <>{children}</> : null;
};

export default Can;
