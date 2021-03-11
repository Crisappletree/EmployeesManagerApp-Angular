# Angularcrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

- Generate Component, run on terminal
    - `ng g c shared/components/[componentname] --module app` 
    - `ng g m shared/components/[componentname] --module app` 

- Generate Module with route
    - `ng g m pages/[foldername]/[modulename] --module app -- route [routename]`

- Generate Service
    - `ng g s pages/[foldername]/[servicename]`

## Bootstrap and BootsWatch

- Run on terminal `npm i bootswatch bootstrap jquery @popperjs/core`

- Add the next lines to `styles.css` file and replace `[theme]` for the theme you want to use.

    - @import "~bootswatch/dist/[theme]/variables";
    -    @import "~bootstrap/scss/bootstrap";
    -    @import "~bootswatch/dist/[theme]/bootswatch";

- Add to `angular.json` in `"scripts":[]` the next importations

    - `"node_modules/jquery/dist/jquery.min.js",`
    - `"node_modules/@popperjs/core/dist/umd/popper.min.js",`
    - `"node_modules/bootstrap/dist/js/bootstrap.min.js"`


## Add routes

- Adding routes to an `<li><a></a></li> label`  with `[routerLink]="['/....']"`

### bind data

`[(ngModel)]="variable you want to bind"`
