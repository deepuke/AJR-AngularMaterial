(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:MaincontrollerCtrl
	 * @description
	 * # MaincontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.components.main').controller('mainCtrl', mainCtrl);
	mainCtrl.$inject = ['$mdSidenav'];

	function mainCtrl($mdSidenav, $mdDialog) {
		var _self = this;

		_self.toggle = function() {
			$mdSidenav('right').toggle();
		};		
	}

})();
