# ShoppingList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


----------------------------------------------------------------------------------------------------------------------------------------------

## We'll install the Bootstrap CSS Framework.

In this course, we use version 3 of the framework, install it via `npm install --save bootstrap@3`  => The @3  is important!

Additionally, when using a project created with Angular CLI 6+ (check via ng -v ), you'll have an angular.json  file instead of an `.angular-cli.json`  file. In that file, you still need to add Bootstrap to the styles[]  array as shown in the next video, but the path should be node_modules/bootstrap/dist/css/bootstrap.min.css , NOT `../node_modules/bootstrap/dist/css/bootstrap.min.css` . The leading `../` must not be included.

------------------------------------------------------------------------------------------------------
## Alternative Non-Collapsable Navigatio Bar

The way we added it, the Navbar will collapse on smaller screens. Since we didn't implement a Hamburger menu, that means that there's no way of accessing our links on smaller screens.

You can either add such a menu on your own, or you replace collapse navbar-collapse  with just navbar-default 

------------------------------------------------------------------------------------------------------
