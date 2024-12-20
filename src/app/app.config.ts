
declare const window:any;
class AppSettings {

    public static tenantURI = window?.WCMAPI?.tenantURI;
    public static pageCode = window?.WCMAPI?.pageCode;
    public static APP_BASE = (this.tenantURI && this.pageCode) ? this.tenantURI + '/' + this.pageCode : '/'
  }
  
  export { AppSettings as APP_CONFIG };