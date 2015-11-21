/* global KeyActions */

window.onkeydown = function(e) {
  var keyMap = {
              65: "C",
              87: "CS",
              83: "D",
              69: "DS",
              68: "E",
              70: "F",
              84: "FS",
              71: "G",
              89: "GS",
              72: "A",
              85: "AS",
              74: "B",
              75 :"Ca",
              79 :"CSa",
              76 :"Da",
              80 :"DSa",
              186 :"Ea",
              222 :"Fa",
              221: "FSa",

            };

   var key = e.keyCode ? e.keyCode : e.which;
    KeyActions.keyPressed(keyMap[key]);

};

window.onkeyup = function(e) {
  KeyActions.keyReleased();

};
