//Aberta da requisição
function get(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}


//Criação das linhas na tabela
function createLine(repository){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdName = document.createElement("td");
    tdFullName = document.createElement("td");
    tdUrl = document.createElement("td");
    tdOwner = document.createElement("td");
    tdId.innerHTML = repository.id;
    tdName.innerHTML = repository.name;
    tdFullName.innerHTML = repository.full_name;
    tdUrl.innerHTML = repository.url;
    tdOwner.innerHTML = repository.owner.login;

    linha.appendChild(tdId);
    linha.appendChild(tdName);
    linha.appendChild(tdFullName);
    linha.appendChild(tdUrl);
    linha.appendChild(tdOwner);

    return linha;
}


//Consumindo a api e buscando dados
function main(){
    let data = get('https://api.github.com/repositories');
    let repositories = JSON.parse(data);
    let tabela = document.getElementById("repositories");
    repositories.forEach(repository => {
        let linha = createLine(repository);
        tabela.appendChild(linha);
    });
}

//Chamando a função principal
main();