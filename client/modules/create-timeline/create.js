import angular from 'angular';
// Components
import createHtml from './create.html';
import createController from './create.controller';
export default angular
  .module('app.create', [])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('create', {
        url: '/create',
        parent: 'layout',
        template: createHtml,
        controller: 'create',
        controllerAs: '$ctrl',
        title: 'Create Node TimeLine',
        resolve : {
          timeLineClass : (TimeLineClass)=>{
            return new TimeLineClass({})
          }
        }
      });
  })
  .controller('create', createController)