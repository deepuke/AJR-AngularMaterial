(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:MaincontrollerCtrl
	 * @description
	 * # MaincontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.shared.slider').directive('lnSlider', lnSliderDirective);

	function lnSliderDirective() {
		var directive = {
			restrict : 'EA',
			replace : true,
			templateUrl : 'scripts/shared/slider/slider.html',
			scope : {},
			controller : 'menuBarCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
