var vetor = [];
const botao = document.querySelector("#b1");
botao.addEventListener("click", () =>{
    let valor1 = document.querySelector("#n1").value;
    let valor2 = document.querySelector("#n2").value;
    let valor3 = document.querySelector("#n3").value;
    let impri = document.querySelector("imprimir");
    vetor.push(valor1, valor2, valor3);
    imprimir.innerHTML = "ARRAY: "+vetor;
});
console.log(vetor);