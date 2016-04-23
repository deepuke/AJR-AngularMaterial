(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:MaincontrollerCtrl
	 * @description
	 * # MaincontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.shared.menuBar').controller('menuBarCtrl', menuBarCtrl);
	menuBarCtrl.$inject = ['$mdDialog'];

	function menuBarCtrl($mdDialog) {
		var _self = this;
	
     _self.loadView = function(view) {
			$state.go('home.' + view);
		};
	}

})(); 