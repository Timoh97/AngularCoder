# Angproject1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Important angular commands
ng generate class Goal==generates class in Angular
ng generate component <name>== generates component in Angular
ng generate directive strikethrough==generates directive that allows word strikethrough
ng generate pipe date-count==generates a pipe called date-count
<!-- This command has created the folder goal-form and inside it created the files that comprise a component. It has also added our goal-form component to our root module declarations array in the app.module.ts file. -->
ng generate component goal-form

## Adding Bootstrap
<!-- This command will add bootstrap to our node modules -->
npm install --save bootstrap popper
<!-- making bootstrap available inside the application at the root level for us to use it. -->
@import "~bootstrap/dist/css/bootstrap.css"

