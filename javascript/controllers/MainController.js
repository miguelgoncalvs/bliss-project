app.controller("MainController", ["$scope", "$location", "$http", function($scope, $location, $http){

	$('#SuccessServerAccess').show(); 
	$('#ErrorServerAccess').hide();  

	$http({
        method: "GET",
        dataType: "application/json",
        url: "https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/health",
        headers : {"Content-Type" : "application/json" } 
    }).success(function(data) {
        console.log("Status: "+data.status);
        $('#SuccessServerAccess').hide();
        $location.path('/questions');
    }).error(function(msg) {
        console.log("Status: "+data.status);
        $('#SuccessServerAccess').hide();
        $('#ErrorServerAccess').show(); 
    });

}]);