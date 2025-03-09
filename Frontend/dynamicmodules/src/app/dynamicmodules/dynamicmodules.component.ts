import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../service/master.service';
import { DynamicModule } from '../Model/dynamicmodulemodel';

@Component({
  selector: 'app-dynamicmodules',
  templateUrl: './dynamicmodules.component.html',
  styleUrl: './dynamicmodules.component.css'
})
export class DynamicmodulesComponent implements OnInit{

  moduleName: string = '';
  moduleData: DynamicModule = { id: 0, moduleName: [], fields: [] }; // Default initialization

  constructor(private route: ActivatedRoute, private masterService: MasterService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moduleName = params['modulename'];
      this.loadModuleData();
    });
  }

  loadModuleData() {
    debugger;
    this.masterService.getFieldsByModule(this.moduleName).subscribe((data) => {
      if (Array.isArray(data)) {
        // Filter modules that contain the selected moduleName
        const matchingModules = data.filter(module => module.moduleName.includes(this.moduleName));

        // Merge all fields from the matched modules into one array
        this.moduleData.fields = matchingModules.flatMap(module => module.fields);
      }
    });
  }
}
