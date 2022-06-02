    export class TreeDropDownParentModel
    {
        dropdownValue:number;
        dropdownText:string;
        treeDropDownChildItems:TreeDropDownChildModel[]=[];
    }
    export class TreeDropDownChildModel
    {
        dropdownValue:number;
        dropdownText:string;
        selected:boolean;
    }
