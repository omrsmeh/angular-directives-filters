angular.module('assets',[])
.filter('dynamicCDN', function() {
  return function(input, cdnArr) {
    input  = input || '';
    cdnArr = cdnArr || Array();
    var _o = '',_c = 0, len = input.length;

    for(var idx = 0; idx < len; idx++) {
      _c = (64 * _c + input.charCodeAt(idx)) << 0;
    }

    _c = (Math.abs(_c) % cdnArr.length);
    _o = (cdnArr.length > 0 ? cdnArr[_c] : '') + input;

    return _o; 
  }
})
.controller('Controller', ['$scope', function($scope) {
  $scope.greeting = 'poster/watch-me-1401995016.jpg';
}]);