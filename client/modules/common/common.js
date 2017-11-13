import angular from 'angular';
// import services from './services/services'

import Paginate from './services/paginate.service'
import TimeLineClass from './services/time-line.factory';
export default angular
  .module('common', [])
  .service({
    Paginate,
    TimeLineClass
  });