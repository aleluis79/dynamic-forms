# DynamicForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

References:

  https://eliteionic.com/tutorials/creating-dynamic-angular-forms-with-json/
  
  https://dev.to/balajipatnam/understanding-angular-dynamic-forms-with-json-data-26eb
  
  https://accesto.com/blog/angular-dynamic-forms-using-json/

## Samples
```
<app-dynamic-form [formStructure]="this.formStructure" [initialData]="this.initialData" (submitForm)="process($event)" />
```

* formStructure: json with the form struture.
```
[
  {
    "type": "text",
    "label": "Name",
    "name": "name",
    "value": "",
    "validations": [
      {
        "validator": "required",
        "message": "Name is required"
      }
    ]
  },
  {
   "type": "text",
   "label": "Last Name",
   "name": "lastname",
   "value": ""
  }
]
```

* initialData: json with initial data
```
{
  "name": "John",
  "lastname": "Doe"
}
```
* submitForm: event form submit
```
  process(event: any) {
    console.log("DATA=", event);
  }
```
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
