import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function useHookForm(defaultValues, schema) {
  return useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
}
