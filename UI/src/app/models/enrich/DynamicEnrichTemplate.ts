import { StringFilterUI } from "@syncfusion/ej2-grids";
import { UAMDropdownModel } from "../common/dropdownmodel";
import { FunctionGridFormat } from "./enrichment-function-model";

export class DynamicEnrichTemplate{
        //functionName: boolean=false;
        // _id:any;
        // id:string;
        functionName: string;
        funcationName_toggle:boolean;
        cols_toggle: boolean;
        create_col_toggle: boolean;
        save_previous_changes_toggle: boolean;
        tablename_toggle: boolean;
        currency_col_toggle:boolean;
        mode_toggle: boolean;
        rule_toggle: boolean;
        ref_string_toggle: boolean;
        separator_toggle: boolean;
        delimiter_toggle: boolean;
        source_toggle: boolean;
        target_toggle: boolean;
        replacement_dict_toggle: boolean;
        sign_toggle: boolean;
        value_toggle: boolean;
        substring_toggle: boolean;
        start_date_toggle: boolean;
        end_date_toggle: boolean;
        dataFrame_toggle:boolean;
        scriptLanguage_toggle:boolean;
        scriptText_toggle:boolean;
        // enableIndividualScriptValue:boolean;
        // colsValues: string[];
        // create_colValue: boolean;
        // save_previous_changesValue: boolean;
        // tablenameValue: string;
        // currency_colValue: string;
        // modeValue: string;
        // ruleValue:string;
        // ref_stringValue: string;
        // separatorValue: string;
        // delimiterValue: string;
        // sourceValue: string;
        // targetValue: string;
        // replacement_dictValue: string;
        // signValue: string;
        // valueValue: string;
        // substringValue: string;
        // start_dateValue: string;
        // end_dateValue: string;
        // constructor(){
        //         this.functionName= "";
        //         this.cols_toggle= false;
        //         this.create_col_toggle= false;
        //         this.save_previous_changes_toggle= false;
        //         this.tablename_toggle= false;
        //         this.currency_col_toggle= false;
        //         this.mode_toggle= false;
        //         this.rule_toggle= false;
        //         this.ref_string_toggle= false;
        //         this.separator_toggle= false;
        //         this.delimiter_toggle= false;
        //         this.source_toggle= false;
        //         this.target_toggle= false;
        //         this.replacement_dict_toggle= false;
        //         this.sign_toggle= false;
        //         this.value_toggle= false;
        //         this.substring_toggle= false;
        //         this.start_date_toggle= false;
        //         this.end_date_toggle= false;
        // }
}
export class DynamicEnrichTemplateValues{
        functionName: string="";
        scriptDisplayName:string;
        enableIndividualScript:boolean;
        cols: string[];
        create_col: boolean;
        new_column_name:string;
        save_previous_changes: boolean;
        tablename: string;
        currency_col: string;
        mode: string;
        rule:string;
        ref_string: string;
        separator: string;
        delimiter: string;
        source: string;
        target: string;
        replacement_dict: string;
        sign: string;
        value: string;
        substring: string;
        start_date: string;
        end_date: string;
        dataFrame:string;
        scriptLanguage:string;
        scriptText:string;
}

export class EnrichScriptModel{
        userId:string;
        clientId:string;
        workspaceId:string;
        scriptname:string;
        enableScript:boolean;
        ScriptList:DynamicEnrichTemplateValues[];
    }
export class CollapseArray{
        collapseToggle:boolean;
        editToggle:boolean;
        collapseText:string;
        editClass:string;

}
export class EnrichGridModel{
        userId:string;
        clientId:string;
        workspaceId:string;
        scriptname:string;
        enableScript:boolean;
        tableName:string;
        functionCategory:string;
        ScriptList:EnrichGridScriptModel[];
        GridFunctionAll:FunctionGridFormat[];
        GridColumnAll:FunctionGridFormat[];
        GridState:object[];
    }
    export class EnrichGridScriptModel{
        functionName:string;
        cols: string[];
    }