//const c1 = document.getElementById("c1");
//const c1 = document.querySelector("#c1");

/// const msg = () => {
//  alert("Clicado");
// };
const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");
    console.log(el.innerHTML + " foi Clicado");
    
  });
});

/*c1.addEventListener("click", (evt) => {
  const el = evt.target;
  el.classList.add("destaque");
});
*/
