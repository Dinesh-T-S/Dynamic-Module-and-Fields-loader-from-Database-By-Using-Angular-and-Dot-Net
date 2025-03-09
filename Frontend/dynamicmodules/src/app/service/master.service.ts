import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicModule, DynamicModuleDataEntry } from '../Model/dynamicmodulemodel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  private apiurl = `${environment.apiurl}`
  constructor(private http : HttpClient) { }

  getall() : Observable<any[]>{
    return this.http.get<any[]>(this.apiurl);
  }

  getFieldsByModule(module:string) : Observable<DynamicModule>{
    return this.http.get<DynamicModule>(this.apiurl+"/"+module);
  }


  addModule(moduledata : DynamicModuleDataEntry) : Observable<any>{
    return this.http.post<any>(this.apiurl, moduledata);
  }
  

}
