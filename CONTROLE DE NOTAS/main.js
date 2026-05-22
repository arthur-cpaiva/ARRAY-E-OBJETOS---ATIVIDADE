const notas = [], nomes = [], media = [];
let contador = 0; 

qtdAluno = Number(prompt("Para quantos alunos serão feitos os feitos resultados?"));

do {
    nomes[contador] = prompt("Qual o nome do aluno?");
    notas[contador] = Number(prompt("Qual a nota do " + nomes[contador] + "?"));
    media[contador] = (notas[contador] /qtdAluno)
    if (notas[contador] >= 7) {
        alert(nomes[contador] + " Aprovado");
    } else if (notas[contador] >= 5 && notas[contador] < 7) {
        alert(nomes[contador] + " Recuperação");
    } else {
        alert(nomes[contador] + " Reprovado")
    }
    contador++;
}
    while (contador != qtdAluno);

    contador = 0;

    do {
        alert("Nome: " + nomes[contador] + "\nNota: " + notas[contador] + "\nMédia da turma: " + media[contador]);
        contador++;
    } while (contador != qtdAluno);