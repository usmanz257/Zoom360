import { UserDetail } from "../user-detail.model";

export class RollupTreeModel{
    nodeId: string;
    nodeName: string;
    parentId: string;
    hasChild: boolean;
    isExpanded: boolean;
    nodeDescription: string;
}
export class RollupTreeDto extends UserDetail {
    ClientTime :string;
    ClientDate :string;
    ClientTimeZone :string;
    TreeName :string;
    SubMenuId:string;
}
export class RollupTreeTemplateinputDto extends UserDetail{
    Node_id: string;
}
