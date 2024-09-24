//array de clientes (inicialmente vazio)
let alunos = JSON.parse(localStorage.getItem ('alunos')) || [];

//função para cadastrar um novo cliente
document.getElementById('alunoForm').addEventListener
('submit', function(event) {
    event.preventDefault(); //evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;

    const novoAluno = { nome, idade, curso, emails };
    alunos.push(novoAluno);

    //salva os alunos no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    //redireciona para a página de lista
    window.location.href = 'lista-alunos.html';
    //window.open('lista_alunos.html', '_blank');
});