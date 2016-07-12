var app = angular.module('olympicApp', []);
var currSport = '';
var archery = [];
var canoe = [];
var judo = [];
var tableten = [];
var taekwondo = [];
var randomArchery = 0;
var randomCanoe = 0;
var randomJudo = 0;
var randomTableten = 0;
var randomTaekwondo = 0;

app.controller('SportController', function($scope, $http){
  $scope.chosenPeople = [];
  getSport('archery');

  $scope.generatePeople = function generatePeople(){
    randomArchery = genRanNum('archery');
    randomCanoe = genRanNum('canoe');
    randomJudo = genRanNum('judo');
    randomTableten = genRanNum('tableten');
    randomTaekwondo = genRanNum('taekwondo');
    $scope.chosenPeople =[archery[randomArchery], canoe[randomCanoe],
     judo[randomJudo], tableten[randomTableten], taekwondo[randomTaekwondo]];
  }
  function getSport(sport){
    currSport = sport;
    $http({method: 'GET', url: '/olympics/' + sport}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    switch (currSport) {
      case 'archery':
        archery =response.data;
        getSport('canoe');
        break;
      case 'canoe':
        canoe =response.data;
        getSport('judo');
        break;
      case 'judo':
        judo = response.data;
        getSport('tableten');
        break;
      case 'tableten':
        tableten = response.data;
        getSport('taekwondo');
        break;
      case 'taekwondo':
        taekwondo = response.data;
        break;
    }
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(sport){
    switch (sport) {
      case 'archery':
        var sportArray = archery;
        break;
      case 'canoe':
        var sportArray = canoe;
        break;
      case 'judo':
        var sportArray = judo;
        break;
      case 'tableten':
        var sportArray = tableten;
        break;
      case 'taekwondo':
        var sportArray = taekwondo;
        break;
    }
    currSport = sport;
    return Math.floor(Math.random() * sportArray.length);
  }
});
