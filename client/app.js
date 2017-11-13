'use strict';
import angular from 'angular';
import _ from 'lodash';

// Import our app config files
import constants from './modules/config/app.constants'
import appConfig from './modules/config/app.config';
import appRun from './modules/config/app.run'


import 'angular-ui-router';

import modules from './modules/modules';

const requires = [
  'ui.router',
  modules.name
];

angular.module('app', requires)
  .config(appConfig)
  .constant('AppConstants', constants)
  .run(appRun);
