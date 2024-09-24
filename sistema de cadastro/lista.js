//obtém os alunos do localStorage
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

//referência ao corpo da tabela
const alunosTableBody = document.getElementById('alunosTable').
getElementsByTagName('tbody')[0];

//limpa a tabela antes de preenchê-la (caso haja múltiplos carragementos)
alunosTableBody.innerHTML = '';

//preenche a tabela com os dados dos alunos
alunos.forEach(aluno => {
    const row = alunosTableBody.insertRow();

    row.insertCell(0).textContent = aluno.nome;
    row.insertCell(2).textContent = aluno.idade;
    row.insertCell(2).textContent = aluno.curso;
    row.insertCell(3).textContent = aluno.emails;
});