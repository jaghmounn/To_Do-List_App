# Task Manager App

A clean, well-structured Angular application for managing tasks with mock authentication, built using Angular, NgRx, and Tailwind CSS.

## Features

- **Mock Authentication**: Login with any valid email address
- **Task Management**: Create, read, update, delete tasks
- **Task Properties**: Title, description, priority (1-5), due date, status (pending/completed)
- **User-specific Tasks**: Tasks are linked to the logged-in user
- **Responsive UI**: Modern design with Tailwind CSS
- **State Management**: NgRx Store with typed actions, reducers, and selectors
- **Route Protection**: Auth Guard for task routes

## Architecture

- **Feature-based structure**:
  - `auth/`: Authentication feature
  - `tasks/`: Task management feature
  - `core/`: Guards, models, shared services
- **NgRx**: Actions, reducers, selectors, effects
- **Standalone Components**: Modern Angular approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:4200`

## Usage

1. **Login**: Enter any valid email address to log in
2. **Add Tasks**: Use the form to create new tasks with title, description, priority, and due date
3. **Manage Tasks**: View, toggle status, edit, or delete tasks
4. **Logout**: Clears authentication and tasks, redirects to login

## Priority Color Mapping

- 1: Gray
- 2: Blue
- 3: Yellow
- 4: Orange
- 5: Red

## Technologies Used

- Angular 20
- NgRx 19
- Tailwind CSS
- RxJS
- TypeScript

## Development server

To start a local development server, run:

```bash
ng serve
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
