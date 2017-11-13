import timeLineNodeHtml from './timeline-node.html';
class TimeLineNodeController {
  constructor($scope, AppConstants) {
    'ngInject';
  }
}

let TimeLineNode = {
  controller: TimeLineNodeController,
  template: timeLineNodeHtml,
  bindings: {
    node: '<'
  }
};

export default TimeLineNode;
