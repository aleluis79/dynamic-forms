# DynamicForms

Projects:
* Web:  Angular
* API: Minimal API Net8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5 and Net8.

References:

  https://eliteionic.com/tutorials/creating-dynamic-angular-forms-with-json/
  
  https://dev.to/balajipatnam/understanding-angular-dynamic-forms-with-json-data-26eb
  
  https://accesto.com/blog/angular-dynamic-forms-using-json/

## Get started

* API REST
  ```
  cd api
  dotnet run
  ```
* SPA Angular
  ```
  cd web
  npm start
  ```

* Storybook
  ```
  cd web
  npm run storybook
  ```

## Samples
```
<app-dynamic-form [formStructure]="this.formStructure" [initialData]="this.initialData" [urlApi]="this.urlApi" (submitForm)="process($event)" />
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

* urlApi: 'http://localhost:5000';
