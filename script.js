let botao = window.document.getElementById("botao")
var tarefa = window.document.querySelector(".tarefa")//Pegando o texto escrito
let tarefas = window.document.querySelector("#tarefas")
function criaTarefa(txt){
    let li = criaLi()
    li.innerText = txt;
    //console.log(li)
    tarefas.appendChild(li)   
    criaBotaoApagar(li)
    tarefa.value=""
    salvarTarefas();

}
botao.addEventListener("click",()=>{
    criaTarefa(tarefa.value);

})
function apagaTarefa(li){

}
function criaLi(){ 
    const li = window.document.createElement("li")
    return li
}
tarefa.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        criaTarefa(tarefa.value);
        
    }
})
function criaBotaoApagar(li){
    li.innerText+= " "
    var bApagar = document.createElement("button");
    bApagar.innerText="Apagar"
    bApagar.setAttribute("class","apagar")
    //console.log(bApagar.classList)
    li.appendChild(bApagar)
}
document.addEventListener("click",(e)=>{
    const el=e.target;
    console.log(el.classList)
    if(el.classList.contains("apagar")){
        //console.log("tem sim")
        el.parentElement.remove();
        salvarTarefas()
    }
})
function salvarTarefas(){
    const liTarefas =tarefas.querySelectorAll("li");
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar","").trim();
        listaDeTarefas.push(tarefaTexto);
        
        //console.log("lista:",listaDeTarefas)
    }  
    const listaJSON = JSON.stringify(listaDeTarefas);
    console.log(listaJSON);
    localStorage.setItem("tarefas",listaJSON)
}
function recuperaTarefas(){
    const tarefas = localStorage.getItem("tarefas");
    console.log(tarefas)
    const listaDeTarefas = JSON.parse(tarefas)
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)

    }
}
recuperaTarefas();