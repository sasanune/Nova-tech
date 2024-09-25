//Função para salvar o produto no localStorage
function saveProduct(product, storageType) { //função que eu quero colocar uma storageType, de banco de dados
    let produtcs = JSON.parse(localStorage.getItem(storageType)) || []; //
    produtcs.push(product); //item que foi puxado do ID e armazenar
    localStorage.setItem(storageType, JSON.stringify(produtcs)); //
}
//funçaõ para lidar com a submissão do fomrulario
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault(); //pegue meu elemento produtoForm, adiciona um evento no submit e previne que as pessoas deixem o form em branco 
    
    const productName = document.getElementById('productName').ariaValueMax; //a variavel vai receber o nome produtcname quem vai alterar o produto e o dom e vai pegar o elemento productname e vai receber o valor 
    const produtPrice = document.getElementById('produtcPrice').ariaValueMax;
    const productDescription = document.getElementById('productDescription').ariaValueMax;
    const productDate = document.getElementById('productDate').ariaValueMax;
    const storageType = document.getElementById('storageType').value; // esse vai pro banco de dados

    const product = { //L:17/22 obejtos 
        name: productName,
        price: produtPrice,
        description: productDescription,
        date: productDate
    }; // uma variavel, um produto e dentro do produto tem as palavras chaves

    saveProduct(product, storageType); //o produtos serao salvos aonde? no bancos de dados 
    //salve o produtos dentro da variaveis no banco de dados
    alert(`Produto ${productName} adicionando em ${storageType}.`); // se for salvo exiba um alerta (o craze: texto e variavel na mesma linha)

    document.getElementById('productForm').reset();
}); //doc pegue o elemento productForm e reset

//simulado uma requisição a uma API externa
function fetchAnimals() { //fetch e colega da API (enviou recebemento delete ou inserir)
    return new Promise((resolve, reject) =>{ //ou ela resolve ou ela rejeita
        fetch('https://jsonplaceholder.typicode.com/users') //API fictícia
        //o link insere a lista abaixo de animais
        .then(reponse => {
            if(!reponsa.ok) { // entao se a resposta for sim ok e ele volta a JSON aqui embaixo
                throw new Error('Erro ao buscar os dados'); // se for nao dar erro
        }
        return response.json();
    })
    .then(data => resolve(data)) // se for ok resolve
    .catch(error => reject(error)); // se for nao rejeita
    })
}

//função para exibir dados da API de "animais entedidos"
document.getElementById('fetchAnimals').addEventListener('click', () => { // o dom pega o elemento fetchanimals vai adicionar ao clicar
    fetchAnimals() // vai fazer uma variavel onde cria um lista vazia 
    .then(animals => {
        const animalList = document.getElementById('animalList');
        animalList.innerHTML = '';

        animals.forEach(animal => {
            const li = document.createElement('li');// o dom vai criar um elemento lista 
            li.textContent = `${animal.name} - ${animal.email}`;// no li vai ter um texto de variavel 
            animalList.appendChild(li);// ele vai criar lista filhos
        }); 
    })
    .catch(error => {
        console.error('Erro:', error)
    });
});

    
