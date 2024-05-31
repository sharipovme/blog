# BLOG APP

Installed dependencies

- `react`
- `react-dom`
- `typescript` (typing)
- `zustand` (auth state)
- `react-router-dom` (routing)
- `sass` (styling)
- `@tanstack/react-query` (caching fetched data)
- `axios` (HTTP client for data fetching)
- `yup` form validation
- `react-hook-form` form manager

## Access control based on roles:

The Can component takes two required props: i (a string representing the permission in the format "resource.action") and children (the React elements to render if the user has permission). Additionally, it accepts an optional prop redirect, which, when set to true, redirects the user to the login page if they don't have permission. It looks like <Can i="blog.read" redirect /> "Can I read a blog page..?"
