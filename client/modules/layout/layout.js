import angular from 'angular';
// Components
import AppHeader from './header.component';
import AppFooter from './footer.component';
import layoutHtml from './layout.html';

export default angular
  .module('app.layout', [])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('layout', {
        abstract: true,
        parent: 'app',
        template: layoutHtml,
        title: 'Todo App'
      });
  })
  .component('appHeader', AppHeader)
  .component('appFooter', AppFooter)