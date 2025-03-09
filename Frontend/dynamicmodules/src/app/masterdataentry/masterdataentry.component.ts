import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { DynamicModuleDataEntry } from '../Model/dynamicmodulemodel';

@Component({
  selector: 'app-masterdataentry',
  templateUrl: './masterdataentry.component.html',
  styleUrls: ['./masterdataentry.component.css'] // Fix styleUrls (was styleUrl)
})
export class MasterdataentryComponent implements OnInit {
  moduleForm!: FormGroup;
  modules: DynamicModuleDataEntry[] = []; // To store submitted modules

  constructor(private fb: FormBuilder, private service: MasterService) {}

  ngOnInit(): void {
    this.moduleForm = this.fb.group({
      id: [null, Validators.required],
      moduleName: this.fb.array([], Validators.required), // Use FormArray for module names
      fields: this.fb.array([]),
    });
  }

  get fields(): FormArray {
    return this.moduleForm.get('fields') as FormArray;
  }

  get moduleNames(): FormArray {
    return this.moduleForm.get('moduleName') as FormArray;
  }

  addModuleName(moduleName: string) {
    if (moduleName.trim()) {
      this.moduleNames.push(this.fb.control(moduleName.trim()));
    }
  }

  removeModuleName(index: number) {
    this.moduleNames.removeAt(index);
  }

  addField() {
    const fieldGroup = this.fb.group({
      fieldName: ['', Validators.required],
      unit: [''],
      type: ['', Validators.required],
      placeholder: [''],
    });

    this.fields.push(fieldGroup);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  onSubmit() {
    if (this.moduleForm.valid) {
      const moduleData: DynamicModuleDataEntry = this.moduleForm.value;

      this.service.addModule(moduleData).subscribe(
        (response) => {
          console.log('Module added successfully:', response);
          this.modules.push(moduleData);
          this.moduleForm.reset();
          this.fields.clear();
          this.moduleNames.clear();
        },
        (error) => {
          console.error('Error adding module:', error);
        }
      );
    } else {
      console.log('Please fill all required fields.');
    }
  }
}
