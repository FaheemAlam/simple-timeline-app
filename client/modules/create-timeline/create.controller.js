class CreateController {
  constructor($scope,$state, timeLineClass) {
    'ngInject';
    this.$state = $state;
    this.timeLine = timeLineClass;
  }

  create() {
    this.timeLine.create().then(res => {
      this.$state.go('main')
    })
  }
}

export default CreateController;
