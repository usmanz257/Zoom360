export class MianMenuModel
    {
       clientId:string;
       workspaceId:string;
       mainManuId:string;
       mainMenuName:string;
       url:string;
    }
export class SubMenusectionModel
    {
     sectionId:string;
     sectionName:string;
     submenuSectionitems: SubMenuSectionItemsModel[]=[]; 
    }
export class SubMenuSectionItemsModel
    {
        subMenuId :string;
        subMenuName :string;
        url :string;
    }