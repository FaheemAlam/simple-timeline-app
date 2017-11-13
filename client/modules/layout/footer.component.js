import footerHtml from './app-footer.html'
class AppFooterCtrl {
  constructor($scope, AppConstants) {
    'ngInject';
    this.appName = AppConstants.appName;
  }
}

let AppHeader = {
  controller: AppFooterCtrl,
  template: footerHtml,
};

export default AppHeader;
