import _ from 'lodash';
function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<ui-view/>'
    })

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
