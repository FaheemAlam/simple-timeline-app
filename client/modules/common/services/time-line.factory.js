import _ from 'lodash';
export default function (AppConstants, $http) {
  'ngInject';
  class TimeLineClass {
    constructor(option = {}) {
      angular.extend(this, option);
    }
    static list(options) {
      return $http({
        method: 'GET',
        url: `/api/list`,
        params: options
      }).then(res => {
        return res.data;
      });
    }

    create() {
      return $http({
        method: 'POST',
        url: `/api/event`,
        data: this
      }).then(res => {
        return res.data;
      });
    }
  }
  return TimeLineClass;
}
