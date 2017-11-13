import _ from 'lodash';
class MainController {
  constructor($scope, timelinePaginate, TimeLineClass) {
    'ngInject';
    this.paginate = timelinePaginate;
    this.paginate.next();
    this.TimeLineClass = TimeLineClass;
  }
  loadMore($event) {
    // this.paginate.items = this.paginate.items.concat([{title: 'fuck', description: 'asdasda', date:''}])
    // $event.preventDefault();
    this.paginate.next()
  }
}

export default MainController;
