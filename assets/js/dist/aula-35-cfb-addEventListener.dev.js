"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//const c1 = document.getElementById("c1");
//const c1 = document.querySelector("#c1");
/// const msg = () => {
//  alert("Clicado");
// };
var cursos = _toConsumableArray(document.querySelectorAll(".curso"));

cursos.map(function (el) {
  el.addEventListener("click", function (evt) {
    var el = evt.target;
    el.classList.add("destaque");
    console.log(el.innerHTML + " foi Clicado");
  });
});
/*c1.addEventListener("click", (evt) => {
  const el = evt.target;
  el.classList.add("destaque");
});
*/