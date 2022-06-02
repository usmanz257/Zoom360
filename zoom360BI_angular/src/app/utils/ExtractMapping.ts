import { Extractdesionmaking } from "../main/extract/AddNewDataStream/EnumForConnectorList";


export class stringmappingDictionary{
     fingerCounts: Map<string, string> = new Map();
    constructor( ) {
        this.fingerCounts.set(Extractdesionmaking.Sqlserver,"DataBaseExtract");
        //file component  mapping 
        this.fingerCounts.set(Extractdesionmaking.CSVFile,"FilesExtract")
        
 
     }

 getStringKey(name:string):any{
  return  this.fingerCounts.get(name);
 }
 
}

 