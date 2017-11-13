import angular from 'angular';
import layout from './layout/layout'
import main from './main/main'
import common from './common/common'
import create from './create-timeline/create'

export default angular
  .module('app.modules', [
    layout.name,
    main.name,
    common.name,
    create.name
  ])
