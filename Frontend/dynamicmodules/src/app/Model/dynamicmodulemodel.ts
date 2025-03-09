export interface DynamicModule {
    id: number;
    moduleName: string[];
    fields: DynamicField[];
  }
  
  export interface DynamicField {
    fieldName: string;
    unit?: string;
    type: string;
    placeholder: string;
    value?: any; 
  }
  

  export interface DynamicModuleDataEntry {
    id: number;
    moduleName: string[];
    fields: {
      fieldName: string;
      unit: string;
      type: string;
      placeholder: string;
    }[];
  }
  