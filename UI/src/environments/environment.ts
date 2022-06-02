// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 assetUrl: 'http://localhost:4200/assets',
 apiUrl: 'http://localhost:51070',
  //old deploment
  //assetUrl: 'http://192.168.223.111:82/assets',
  //apiUrl: 'http://192.168.223.111:81',
  //test envirnoment
  //  assetUrl: 'http://192.168.223.111:80/assets',
  //  apiUrl: 'http://192.168.223.111:85',
  staffRole: 2,
  adminRole: 1,
  storage: {
    userData: 'zoom_user_data',
    ModeId: 'ModeId',
    appMode:'appMode',
    presentMode:'presentMode',
    myPage:'myPage',
    userId:'userId',
    clientId:'clientid',
    workspaceId:'workspaceId',
    mainMenu:'mainMenu',
    subMenuId:'subMenuId',
    treeNodeid:'treeNodeId',
    accountId:"accountId",
    userProfileImage:"userProfileImage",
    defaultpage:"defaultPage",
    governUserId:"governUserId",
    modeList:"modeList",
    treeScriptId:"treeScriptId"

  },
  // eventsColors: [
  //   {
  //     textColor: '#fff',
  //     color:'#f00',
  //   },
  //   {
  //     textColor: '#fff',
  //     color:'#2000ff',
  //   },
  //   {
  //     textColor: '#ffff',
  //     color:'#f220e5',
  //   },
  //   {
  //     textColor: '#fff',
  //     color:'#295718',
  //   },
  //   {
  //     textColor: '#fff',
  //     color:'#295718',
  //   }
  // ],

  // appointmentStatus:{
  //   arrived:1,
  //   completed:3
  // }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
