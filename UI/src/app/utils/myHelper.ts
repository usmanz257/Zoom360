import { Injectable } from "@angular/core";

declare var $;

@Injectable()
export class MyHelper {
      constructor() { }

      strlen(str: any) {
            return typeof str == "string" && str != "undefined" ? str.trim().length : 0;
      }

      isString(str: any) {
            return typeof str === "string";
      }

      sizeOf(data: any) {
            return data ? Object.keys(data).length : 0;
      }

      percentage(percent: any, total: any) {
            return total - (percent / 100) * total;
      }

      hasError(validationResultSet: any) {
            for (let i in validationResultSet) {
                  if (validationResultSet[i].error) {
                        return true;
                  }
            }
            return false;
      }

      sizeOfJSON(data: any) {
            return data ? Object.keys(data).length : 0;
      }

      isJSONArray(arr: any) {
            return Array.isArray(arr);
      }

      isJSONObject(obj: any) {
            return obj && typeof obj == "object" && !Array.isArray(obj);
      }

      formatErrorObject(validationResultSet: any) {
            for (let i in validationResultSet) {
                  if (validationResultSet[i].hasError) {
                        if (Object.keys(validationResultSet[i]).length > 0) {
                              for (let j in validationResultSet[i]) {
                                    if (
                                          typeof validationResultSet[i][j] == "object" &&
                                          j != "message" &&
                                          !validationResultSet[i][j].hasError
                                    ) {
                                          delete validationResultSet[i][j];
                                    }
                              }
                        }
                  } else {
                        delete validationResultSet[i];
                  }
            }
            return validationResultSet;
      }

      scrollToMainElement(elem: string = "#main-element") {
            setTimeout(() => {
                  $("html, body").animate(
                        {
                              scrollTop: $(elem).offset().top
                        },
                        500
                  );
            }, 500);
      }

      ucfirst(str: string) {
            return str.charAt(0).toUpperCase() + str.slice(1);
      }

      togglePasswordInputType() {
            $(".pass-show").click(function () {
                  // console.log($(this).children(), $(this).prev());

                  if (
                        $(this)
                              .children()
                              .hasClass("fa-eye")
                  ) {
                        $(this)
                              .children()
                              .removeClass("fa-eye");
                        $(this)
                              .children()
                              .addClass("fa-eye-slash");
                        $(this)
                              .prev()
                              .attr("type", "password");
                  } else {
                        $(this)
                              .children()
                              .removeClass("fa-eye-slash");
                        $(this)
                              .children()
                              .addClass("fa-eye");
                        $(this)
                              .prev()
                              .attr("type", "text");
                  }
            });
      }

      getFormsControlValues(formControlls) {
            var data = {};
            // tslint:disable-next-line:forin
            for (const inputName in formControlls) {
                  data[inputName] = formControlls[inputName].value;
            }
            return data;
      }
}
