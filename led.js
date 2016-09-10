var five = require("johnny-five"),
    board, slider, servo;

board = new five.Board();

board.on("ready", function() {

  var scalingRange = [ 60, 120  ];
  var startPosition = 90;
  var stepLength = 10;

  var led = new five.Leds([7,8]);

  legs = new five.Servos([{
    pin: 3,
    range: scalingRange,
    center: true
  }, {
    pin: 9,
    range: scalingRange,
    center: true
  },{
    pin: 10,
    range: scalingRange,
    center: true
  },{
    pin: 11,
    range: scalingRange,
    center: true
  }]);

  slider = new five.Sensor({
    pin: "A2",
    freq: 50
  });
  this.repl.inject( { legs:legs,
  led:led } );


});
