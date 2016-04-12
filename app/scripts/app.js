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
	'amV01App.components.main', 
	'amV01App.shared.menuBar',
	'amV01App.shared.slider',
	'amV01App.shared.footer'

	
	]).config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/');
	//
	// Now set up the states
	$stateProvider.state('home', {
		url : '/',
		templateUrl : 'scripts/components/main/main.html',
		controller : 'mainCtrl',
		controllerAs : 'ctrl'
	});
	
	
	
});
