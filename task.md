### Task: Build a Feature-Rich Blogging Platform

Objective: Create a mini blogging platform that allows users to create, edit, delete, and view
blog posts. Include functionality for user authentication and role-based access control.

### Overview:

The goal of this task is to create a feature-rich blogging platform using React, TypeScript, Zustand,
React Router, SCSS with BEM, and Tanstack Query. This platform should allow users to perform CRUD
(Create, Read, Update, Delete) operations on blog posts and include user authentication and role-based
access control for managing permissions.

### Dependencies:

Ensure you have the following dependencies installed:

- ✅ `react`
- ✅ `react-dom`
- ✅ `typescript`
- ✅ `zustand`
- ✅ `react-router-dom`
- ✅ `sass` (for SCSS)
- ✅ `@tanstack/react-query`
- ✅ `axios` (or any other HTTP client for data fetching)
- ✅ `@types/react`
- ✅ `@types/react-dom`
- ✅ `@types/react-router-dom`

### Requirements:

1. **Components**:
   ✅ **BlogList**: Displays a list of blog posts.
   ✅ **BlogPost**: Displays individual blog posts.
   ✅ **BlogForm**: Allows creating and editing blog posts.
   ✅ **Login**: Handles user authentication.

2. **TypeScript**:
   ✅ Ensure all components and hooks are strongly typed. Using generics wherever possible..

3. **State Management with Zustand**:
   ✅ Use Zustand to manage global state for user authentication and state, and any other states that you’d need
   (Though it’s preferred for state that shouldn’t be global, to stay local as much as possible in the component lifecycle)

4. **Routing**:
   ✅ Implement routing for the main blog list, individual blog post view, and the login page.
   ✅ Include protected routes for creating, editing, and deleting blog posts, accessible only to authenticated users.

5. **SCSS**:
   ✅ Style the application using SCSS following BEM methodology.
   ✅ Ensure the application is responsive for various screen sizes and accessible.

6. **Data Fetching with Tanstack Query**:
   ✅ Use Tanstack Query to fetch blog posts from the mock API endpoint.
   ✅ Implement error handling and loading states.
   ✅ Implement optimistic updates for any blog post action.

7. **Authentication and Role-Based Access Control**:
   ✅ Implement user authentication using a mock authentication service.
   ✅ Use Zustand to manage user authentication state.
   ✅ Implement role-based access control to restrict access to certain routes and actions based on user roles
   (e.g., admin, editor)

### Mock API Endpoint:

Create a free JSON server using: https://github.com/typicode/ json-server

### Evaluation Criteria:

1. **Code Quality**:
   ✅ Clean, readable, performant, and maintainable code.
   ✅ Proper use of TypeScript generics and type safety.
   ✅ Modern JS, using ES6.

2. **State Management**:
   ✅ Efficient and effective use of Zustand for state management.

3. **Routing**:
   ✅ Proper implementation of navigation and routing.
   ✅ Correct use of protected routes and role-based access control.

4. **Styling**:
   ✅ Adherence to BEM conventions in SCSS.
   ✅ Responsive and visually appealing design.

5. **Data Fetching**:
   ✅ Correct use of Tanstack Query for data fetching.
   ✅ Handling loading and error states gracefully.
   Implementing optimistic updates for a better user experience.

6. **Authentication and Security**:
   ✅ Proper implementation of user authentication.
   ✅ Secure handling of protected routes and role-based access control.

7. **Performance and Optimization**:
   ✅ Efficient rendering and state updates.
   ✅ Proper use of memoization and other performance optimization techniques.

### Deliverables:

A GitHub repository with the completed task.
A brief README explaining the implementation and any assumptions made.
A live link of the application, you can host for free on GitHub pages or Netlify
