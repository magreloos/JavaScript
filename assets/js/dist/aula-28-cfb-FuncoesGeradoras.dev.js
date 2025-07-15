"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(contador);

/*

function* cores() {//o asterisco informa que a função é geradora
  yield "Vermelho";//a pakavara YIELD é responsavel pela parada
  yield "Verde";
  yield "Azul";
}//ao chegar ao final e for novamnete chamado ira mostra o valor undefined

const itc = cores();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

/*
function* perguntas() {
  const nome = yield "qual seu nome";
  const esporte = yield "qual seu esporte favorito";
  return "Seu nome é: " + nome + " seu estporta favorito é: " + esporte;
}
const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("Paulo").value);
console.log(itp.next("volei").value);
*/
function contador() {
  var i;
  return regeneratorRuntime.wrap(function contador$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!true) {
            _context.next = 8;
            break;
          }

          _context.next = 4;
          return i++;

        case 4:
          if (!(i > 100)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("break", 8);

        case 6:
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var itc = contador();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = itc[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var c = _step.value;
    console.log("Contador: " + c);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}