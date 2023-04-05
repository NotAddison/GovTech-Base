# React Basics Repo
> This repo contains basic react project(s) to help you get started with React.

## Setup
#### React
- Initalize a new React app with `npx create-react-app (project-name))`
- Start the app with `npm start` (after cd'ing into the project directory)

#### NestJS
- Initalize a new NestJS app with `nest new (project-name)`
- Shortcut (to create a new controller): nest g controller (controller-name) 
- Run nest app with `npm run start:dev` (runs on http://localhost:3000/)


#### MongoDB
- Install MongoDB NestJS Wrapper `npm install --save mongoose @nestjs/mongoose`
- Import the module in the `app.module.ts` file in the imports array
- Create a schema --> `nest g mo (model-name)`
- Create a controller --> `nest g co (controller-name)`
- Create a Resource --> `nest g res (resource-name)` || `nest g resource`
- NOTE: If connection to localhost does not work, use `127.0.0.1` instead.
- NOTE: JSON -> Mapped to Scheme (Class) using constructor -> Appened to DB