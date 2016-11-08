angular.module('sharedModule',[])
.service('myMathService',function(){
	this.getMult = function(a,b){
		return a*b;
	};
	this.getDiv = function(a,b){
		return a/b;
	};
})
.service('mySquareService',function(){
	this.getSquare = function(a){
		return a*a;
	};
	this.getSquareRoot = function(a){
		return Math.sqrt(a);
	};
});