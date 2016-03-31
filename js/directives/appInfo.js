app.directive('appInfo',function(){
	return {
		restrict: 'E',
		scope: {
			app: '='
		},
		templateUrl: 'js/directives/appInfo.html'    
	};
});