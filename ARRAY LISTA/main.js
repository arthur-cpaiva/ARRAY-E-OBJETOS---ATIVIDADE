const tarefas = [];

let contador = 0;

qtdTarefas = Number(prompt("Qual a quantidade de tarefas pra hoje?"))

do {
    tarefas[contador] = (prompt("Digite as tarefas que serão executadas: "))
    contador++ 
} while (contador != qtdTarefas);

contador = 0;

do {
    alert("Tarefa: " + tarefas[contador]); 
    console.log (tarefas[contador]);
    contador++;
} while (contador != qtdTarefas);