import angular from 'angular';
// Components
import mainHtml from './main.html';
import timeLineNode from './timeline-node/timeline-node.component';
import mainController from './main.controller';
export default angular
  .module('app.main', [])
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('main', {
        url: '/',
        parent: 'layout',
        template: mainHtml,
        controller: 'main',
        controllerAs: '$ctrl',
        resolve:{
          timelinePaginate: (Paginate, TimeLineClass) => {
            return new Paginate(TimeLineClass.list, {
              limit: 5,
              offset:0
            });
          }
        },
        title: 'Main TimeLine'
      });
  })
  .controller('main', mainController)
  .component('timelineNode', timeLineNode)