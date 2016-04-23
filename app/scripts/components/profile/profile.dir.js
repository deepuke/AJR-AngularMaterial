(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:MaincontrollerCtrl
	 * @description
	 * # MaincontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.components.profile').directive('lnProfile', lnProfileDirective);

	function lnProfileDirective() {
		var directive = {
			restrict : 'EA',
			replace : true,
			templateUrl : 'scripts/components/profile/profile.html',
			scope : {},
			controller : 'dashboardCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
