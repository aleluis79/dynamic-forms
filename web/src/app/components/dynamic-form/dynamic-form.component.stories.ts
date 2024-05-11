import { Meta, StoryObj, applicationConfig } from "@storybook/angular";
import { DynamicFormComponent } from "./dynamic-form.component";
import { InputSignal, LOCALE_ID, OutputEmitterRef } from "@angular/core";
import { IFormStructure } from "../../services/form.interface";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { fn } from '@storybook/test';
import { provideMomentDateAdapter } from "@angular/material-moment-adapter";
import { CUSTOM_DATE_FORMAT } from "../../app.config";

const meta: Meta<DynamicFormComponent> = {
    title: "Components/Forms",
    component: DynamicFormComponent,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: '🚀 Dynamic Form Component Descriptions',
        }
      },
    },
    decorators: [
      applicationConfig({
          providers: [
            provideAnimations(),
            provideHttpClient(withFetch()),
            { provide: LOCALE_ID, useValue: 'es-AR' },
            provideMomentDateAdapter(CUSTOM_DATE_FORMAT, {useUtc: true}),
        
          ]
      }),
    ]
}

export default meta

type Story = StoryObj<DynamicFormComponent>;

export const Sample1: Story = {
    args: {
        formStructure: 
        [
        {
            type: "text",
            label: "Name",
            name: "name",
            value: "",
            validations: [
            {
                validator: "required",
                message: "Name is required"
            }
            ]
        },
        {
            type: "textarea",
            label: "Last Name",
            name: "lastname",
            value: ""
        },
        {
            type: "email",
            label: "Email",
            name: "email",
            value: "",
            validations: [
            {
                validator: "required",
                message: "Email is required"
            },
            {
                validator: "email",
                message: "Invalid email format"
            }
            ]
        },
        {
            type: "number",
            label: "Age",
            name: "age",
            value: "",
            validations: [
            {
                validator: "pattern",
                value: "^[0-9]+$",
                message: "Age should be a number"
            },
            {
                validator: "maxlength",
                value: 2,
                message: "Age has to be two digits"
            },
            {
                validator: "min",
                value: 10,
                message: "Age should be greater than 10"
            },
            {
                validator: "max",
                value: 90,
                message: "Age should be less than 90"
            }
            ]
        },
        {
            type: "select",
            label: "Country",
            name: "country",
            value: "",
            options: [
            { label: "India", value: 1 },
            { label: "USA", value: 2 },
            { label: "Canada", value: 3 }
            ],
            validations: [
            {
                validator: "required",
                message: "Address is required"
            }
            ]
        },
        {
            type: "radio",
            label: "Gender",
            name: "gender",
            value: true,
            options: [
            { label: "Male", value: true },
            { label: "Female", value: false }
            ],
            validations: []
        },
        {
            type: "checkbox",
            label: "Agree to terms and conditions",
            name: "terms",
            value: false,
            validations: [
            {
                validator: "requiredTrue",
                message: "Agree to terms and conditions is required"
            }
            ]
        }
        ]  as unknown as InputSignal<IFormStructure[]>,

        initialData: {
            "name": "Alejandro",
            "lastname": "Luis",
            "email": "ale@ale.com",
            "age": "44",
            "country": 2,
            "gender": true
        } as unknown as InputSignal<Object>,

        urlApi: '' as unknown as InputSignal<string>,

        dataResult: fn() as unknown as OutputEmitterRef<any>
    }
}


export const Sample2: Story = {
    args: {
        formStructure: 
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
              "type": "date",
              "label": "Date",
              "name": "date",
              "value": "",
              "validations": [
                {
                  "validator": "required",
                  "message": "Date is required"
                }
              ]
            },
            {
              "type": "radio",
              "label": "¿Is Player?",
              "name": "isPlayer",
              "value": "false",
              "options": [
                {
                  "label": "Yes",
                  "value": "true"
                },
                {
                  "label": "No",
                  "value": "false"
                }
              ]
            },
            {
              "type": "select",
              "label": "Color",
              "name": "color",
              "value": "",
              "optionsFn": "colors"
            },
            {
              "type": "select",
              "label": "Country",
              "name": "country",
              "value": "",
              "optionsFn": "countries"
            },
            {
              "type": "select",
              "label": "Model",
              "name": "model",
              "value": "",
              "options": [
                {
                  "label": "Ford",
                  "value": "ford"
                },
                {
                  "label": "Chevrolet",
                  "value": "chevrolet"
                }
              ]
            }
          ]  as unknown as InputSignal<IFormStructure[]>,
          urlApi: 'http://localhost:5000' as unknown as InputSignal<string>,
    }
}




export const Sample3: Story = {
    args: {
        formStructure: 
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
                },
                {
                "validator": "maxlength",
                "value": 5,
                "message": "Name is too long"
                }
            ]
            },
            {
            "type": "text",
            "label": "Last Name",
            "name": "lastname",
            "value": ""
            },
            {
            "type": "password",
            "label": "Password",
            "name": "password",
            "value": ""
            }
        ]  as unknown as InputSignal<IFormStructure[]>
    }
}