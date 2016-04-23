'use strict';

/**
 * @ngdoc overview
 * @name amV01App
 * @description
 * # amV01App
 *
 * Main module of the application.
 */
angular.module('amV01App', [
		'ui.router',
		'ngMaterial',
		'ngLocalize',
		'ngLocalize.Config',
		'ngLocalize.InstalledLanguages',
		'ngLocalize.Events',
		/*shared components*/
		'amV01App.components.main',
		'amV01App.components.login',
		'amV01App.components.dashboard',
		'amV01App.shared.menuBar',
		'amV01App.shared.slider',
		'amV01App.shared.header',
		'amV01App.shared.footer',
		'amV01App.shared.input',
		'amV01App.components.learningResource',
		'amV01App.components.profile'

	]).value('localeSupported', [
        'en-US',
        'fr-FR'
  ]).config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url : '/home',
			abstract : true,
			templateUrl : 'scripts/components/main/main.html',
			controller : 'mainCtrl',
		}).state('home.dashboard', {
			url : '/dashboard',
			templateUrl : 'scripts/components/dashboard/dashboard.html',
			controller : 'dashboardCtrl',
			controllerAs : 'ctrl'
		}).state('home.learningResource', {
			url : '/learningResource',
			templateUrl : 'scripts/components/learningResource/learningResource.html',
			controller : 'learningResourceCtrl',
			controllerAs : 'ctrl'
		});
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise('/home/dashboard');
});
