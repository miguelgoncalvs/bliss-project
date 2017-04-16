app.controller("ShareController", ["$scope","$routeParams", "$http", function($scope, $routeParams, $http){
	
    Offline.check()

    $scope.id = $routeParams.id;

    $('#SuccessMessage').hide();  
    $('#WarningMessage').hide();  
    $('#ErrorMessage').hide();  

	$scope.title = "Sharing Question " + $scope.id;
    $scope.question = [];

    $scope.contentUrl = "https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions/"+$scope.id
	
    $scope.submitQuestionResult = function() {
        if($scope.email != ""){
            $http({
                method: "POST",
                dataType: "application/json",
                url: "https://private-anon-c152698e4b-blissrecruitmentapi.apiary-mock.com/share?"+$scope.email+"&"+$scope.contentUrl,
                headers : {"Content-Type" : "application/json" } 
            }).success(function(data) {
                console.log("Success.");
                //$('#SuccessMessage').show();
            }).error(function(msg) {
                console.log("Something is wrong. Please try again.");
                //$('#ErrorMessage').show(); 
            });
        } else {
            //$('#WarningMessage').show();
        }
    };
	
}]);