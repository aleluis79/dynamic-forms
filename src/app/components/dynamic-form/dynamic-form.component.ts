import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { IFormStructure } from '../../services/form.interface';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  formStructure = input.required<IFormStructure[]>({alias: 'formStructure'});

  initialData = input<object>({alias: 'initialData'});

  dataResult = output<any>({alias: 'submitForm'});

  dynamicForm!: FormGroup

  formBuilder = inject(FormBuilder)

  constructor() {

    effect(() => {

      let formStructure = this.formStructure();

      if (formStructure.length > 0) {

        let initialData = this.initialData();
        let formGroup: { [key: string]: any } = {};

        formStructure.forEach(control => {
          let controlValidators: ValidationErrors[] = [];

          if (control.validations) {
            control.validations.forEach((validation: any) => {
              if (validation.validator === 'required') controlValidators.push(Validators.required);
              if (validation.validator === 'email') controlValidators.push(Validators.email);
              if (validation.validator === 'pattern') controlValidators.push(Validators.pattern(validation.value));
              if (validation.validator === 'minlength') controlValidators.push(Validators.minLength(validation.value));
              if (validation.validator === 'maxlength') controlValidators.push(Validators.maxLength(validation.value));
              if (validation.validator === 'min') controlValidators.push(Validators.min(validation.value));
              if (validation.validator === 'max') controlValidators.push(Validators.max(validation.value));
              if (validation.validator === 'requiredTrue') controlValidators.push(Validators.requiredTrue);
              if (validation.validator === 'nullValidator') controlValidators.push(Validators.nullValidator);
            });
          }

          if (initialData) {
            for(const [key, value] of Object.entries(initialData)){
              if (control.name === key) control.value = value as string
            }
          }

          formGroup[control.name] = [control.value || '', controlValidators];
        });

        this.dynamicForm = this.formBuilder.group(formGroup);
      }

    })

  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      //console.log(this.dynamicForm.value);
      this.dataResult.emit(this.dynamicForm.value);
    } else {
      this.dynamicForm.markAllAsTouched();
    }
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);
    for (let validation of control.validations) {
      let validator = validation.validator;
      if (validator === 'requiredTrue') validator = 'required';
      if (formControl?.hasError(validator)) {
        return validation.message;
      }
    }

    return '';
  }

  isRequired(control: any): boolean {
    return control.validations?.some((validation: any) => validation.validator === 'required');
  }

}
