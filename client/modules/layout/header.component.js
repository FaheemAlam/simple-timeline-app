import headerHtml from './app-header.html';
class AppHeaderCtrl {
  constructor($scope, AppConstants) {
    'ngInject';
    this.appName = AppConstants.appName;
  }
  changeAppName(){
    this.appName = "New Nmae"
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  template: headerHtml,
};

export default AppHeader;
