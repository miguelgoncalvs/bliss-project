app.controller("DetailsController", ["$scope","$routeParams", "$http", function($scope, $routeParams, $http){
	
    Offline.check()

    $scope.id = $routeParams.id;

    $('#SuccessMessage').hide();  
    $('#WarningMessage').hide();  
    $('#ErrorMessage').hide();  

	$scope.title = "Question " + $scope.id;
    $scope.question = [];
    $scope.choices = [];
	
    $http({
        method: "GET",
        dataType: "application/json",
        url: "https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions/"+$scope.id,
        headers : {"Content-Type" : "application/json" } 
    }).success(function(data) {
        $scope.question = data;
        $scope.choices = data.choices;
    }).error(function(msg) {
        console.log("Something is wrong. Please try again.");
    });
    

    $scope.submitQuestionResult = function() {
        $scope.answer = $('input[name=questionAnswer]:checked').val();

        if($scope.answer != undefined){

            $scope.choices.forEach(function(element){
                if($scope.answer == element.choice){
                    element.votes = element.votes + 1;
                }
            });

            console.log($scope.choices);

            $scope.update = {
                "id": $scope.id,
                "image_url": $scope.question.image_url,
                "thumb_url": $scope.question.thumb_url,
                "question": $scope.question.question,
                "published_at": $scope.question.published_at,
                "choices": $scope.choices
            }
            console.log($scope.update);
            $http({
                method: "PUT",
                dataType: "application/json",
                url: "https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions/"+$scope.id,
                params: $scope.update,
                headers : {"Content-Type" : "application/json" } 
            }).success(function(data) {
                console.log("Success.");
                $('#SuccessMessage').show(); 
            }).error(function(msg) {
                console.log("Something is wrong. Please try again.");
                $('#ErrorMessage').show();  
            });
        } else {
            $('#WarningMessage').show(); 
        }
        
    };
	
}]);