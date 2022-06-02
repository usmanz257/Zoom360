export class EnrichmentModel{
    userId:string;
    clientId:string;
    workspaceId:string;
    scriptname:string;
    enableScript:boolean;
    ScriptList:Script[];
}
export class Script{
    functionName:string;
    cols:string[];
}
export class FunctionGridFormat{
    checkboxToggle:boolean;
}