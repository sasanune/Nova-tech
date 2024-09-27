// Array de alunos (inicialmente vazio)
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

// Função para cadastrar um novo aluno
document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;

    const novoAluno = { nome, idade, curso, emails };
    alunos.push(novoAluno);

    // Salva os alunos no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Redireciona para a página de lista
    // window.location.href = 'lista_alunos.html';
    window.open('lista_alunos.html', '_blank');
});