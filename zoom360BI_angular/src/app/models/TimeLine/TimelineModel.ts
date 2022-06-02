import { DataTable } from "fusioncharts";

export class TimelineModel{
    apprearance_Logo:string;
    platform_Date:string;
    platform_Time:string;
    platform_Name:string;
    clicks:number;
    postwise_Status:string;
    platform_status:string;
    widgetType:string;
    reportImage:string;
    sumofsales:string;
    whereplatform:string;
    view:string;
    systemgenerated:string;
    widget_Id:string;
    timeline_Widget_Data:[];
}
export class TimelineinfoModel{
    followingCount :string;
    streams:string;
    favourite :string;
}
export class WidgetDetailDataModel{
      gridColumnNames :string[];
      gridValues :DataTable;
      userId:string;
      workSpaceId:string;
      client_Id:string;
      widget_Id:string;
}
