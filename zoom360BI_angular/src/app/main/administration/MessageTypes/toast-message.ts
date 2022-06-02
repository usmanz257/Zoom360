import { ToastPositionModel } from "@syncfusion/ej2-angular-notifications";

export class ToastMessage {
   public  toast:any[];
   public position: ToastPositionModel;
    constructor(){

         this.toast = [
            { title: 'Warning!', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning', icon: 'e-warning toast-icons' },
            { title: 'Success!', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success', icon: 'e-success toast-icons' },
            { title: 'Error!', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger', icon: 'e-error toast-icons' },
            { title: 'Information!', content: "", cssClass: 'e-toast-info', icon: 'e-info toast-icons' },
            { title: 'Info!', content: ""}
        ];
        this.position= { X: 'Right', Y: 'Bottom' };
    }
}
