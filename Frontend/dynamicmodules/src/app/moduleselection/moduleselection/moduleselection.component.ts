import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moduleselection',
  templateUrl: './moduleselection.component.html',
  styleUrl: './moduleselection.component.css'
})
export class ModuleselectionComponent implements OnInit{

  modules:string[] = [];
  
  constructor(private masterservice : MasterService, private router: Router){}

  ngOnInit(): void {
    this.masterservice.getall().subscribe(data => {
      this.modules = data.map(module => module.moduleName[0]); // Extract module names
    });
  }
  

  navigateToModule(module:string){
    this.router.navigate(['/module', module]);
  }

}
