app.controller("QuestionsController", ["$scope","$http", function($scope,$http){
	
	$scope.title = "All Questions"
    $scope.questions = [];

	$http({
        method: "GET",
        dataType: "application/json",
        url: "https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions?",
        headers : {"Content-Type" : "application/json" } 
    }).success(function(data) {
        console.log("Success.");
        $scope.questions = data;
    }).error(function(msg) {
        console.log("Something is wrong. Please try again.");
    });

}]);