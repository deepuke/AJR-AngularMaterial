(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:FootercontrollerCtrl
	 * @description
	 * # FootercontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.shared.footer').directive('lnFooter', lnFooterDirective);

	function lnFooterDirective() {
		var directive = {
			restrict : 'EA',
			templateUrl : 'scripts/shared/footer/footer.html',
			scope : {},
			controller : 'menuBarCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
