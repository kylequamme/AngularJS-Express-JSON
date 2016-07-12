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
    console.log(randomArchery);
    randomCanoe = genRanNum('canoe');
    console.log(randomCanoe);
    randomJudo = genRanNum('judo');
    console.log(randomJudo);
    randomTableten = genRanNum('tableten');
    console.log(randomTableten);
    randomTaekwondo = genRanNum('taekwondo');
    console.log(randomTaekwondo);
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
        // console.log('archery', archery);
        getSport('canoe');
        break;
      case 'canoe':
        canoe =response.data;
        // console.log('canoe', canoe);
        getSport('judo');
        break;
      case 'judo':
        judo = response.data;
        // console.log('judo',judo);
        getSport('tableten');
        break;
      case 'tableten':
        tableten = response.data;
        // console.log('tableten',tableten);
        getSport('taekwondo');
        break;
      case 'taekwondo':
        taekwondo = response.data;
        // console.log('taekwondo',taekwondo);
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
    // console.log(Math.floor((Math.random() * sport.length) + 1));
    return Math.floor(Math.random() * sportArray.length);
  }
});
