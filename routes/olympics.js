var router = require('express').Router();

var ar0 = new Athlete('Mackenzie Brown', 'Flint, TX');
var ar1 = new Athlete('Brady Ellison', 'Globe, AZ');
var ar2 = new Athlete('Zach Garret', 'Wellington, MO');
var ar3 = new Athlete('Jake Kaminski', 'Gainesville, FL');
var archery = [ar0, ar1, ar2, ar3];

var ck0 = new Athlete('Casey Eichfeld', 'Drums, PA');
var ck1 = new Athlete('Maggie Hogan', 'Huntington Beach, CA');
var ck2 = new Athlete('Devin McEwan', 'Salisbury, CT');
var ck3 = new Athlete('Ashley Nee', 'Darnestown, MD');
var ck4 = new Athlete('Michal Smolen', 'Gastonia, NC');
var canoe = [ck0, ck1, ck2, ck3, ck4];

var jo0 = new Athlete('Colton Brown', 'Piscataway, NJ');
var jo1 = new Athlete('Angelica Delgado', 'Miami, FL');
var jo2 = new Athlete('Nick Delpopolo', 'Davie, FL');
var jo3 = new Athlete('Kayla Harrison', 'Middletown, OH');
var jo4 = new Athlete('Marti Malloy', 'Oak Harbor, WA');
var jo5 = new Athlete('Travis Stevens', 'Tacoma, WA');
var judo = [jo0, jo1, jo2, jo3, jo4, jo5];

var tt0 = new Athlete('Yijun Feng', 'Atlanta, GA');
var tt1 = new Athlete('Kanak Jha', 'Milpitas, CA');
var tt2 = new Athlete('Timothy Wang', 'Houston, TX');
var tt3 = new Athlete('Jennifer Wu', 'Fort Lee, NJ');
var tt4 = new Athlete('Lily Zang', 'Palo Alto, CA');
var tt5 = new Athlete('Jiaqi Zheng', 'Fremont, CA');
var tableten = [tt0, tt1, tt2, tt3, tt4, tt5];

var to0 = new Athlete('Jackie Galloway', 'Wylie, TX');
var to1 = new Athlete('Stephen Lambdin', 'Rockwall, TX');
var to2 = new Athlete('Steven Lopez', 'Sugar Land, TX');
var to3 = new Athlete('Paige McPherson', 'Abilene, TX');
var taekwondo = [to0, to1, to2, to3];

router.get('/', function(request, response){
  response.send('Sorry, not a valid path');
});
router.get('/archery', function(request, response){
  response.send(archery);
});
router.get('/canoe', function(request, response){
  response.send(canoe);
});
router.get('/judo', function(request, response){
  response.send(judo);
});
router.get('/tableten', function(request, response){
  response.send(tableten);
});
router.get('/taekwondo', function(request, response){
  response.send(taekwondo);
});

function Athlete(name, origin){
  this.name = name,
  this.origin = origin
}

module.exports = router;
