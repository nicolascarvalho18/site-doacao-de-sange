function carregaDados(){
    const dados = [
        {"id": 0, "nome": "admin", "cpf": 123, "email": "admin@gmail.com", "endereco": "R. teste", "cep": 123, "tipo_sanguineo": "A+", "senha": 123}
    ]
    let dadosJSON = JSON.stringify(dados);
    localStorage.setItem("banco", dadosJSON);
    return dados;
}

function pegaIdMaximo(lista){
    let listaIDs = [] 
    lista.forEach(item => {
        listaIDs.push(item.id);
    })
    return Math.max(...listaIDs);
}

function existe(informacao, banco){
    let existe = false;
    banco.forEach(usuario=> {
        if(informacao == usuario.cpf){
            existe = true;
        }
    })
    return existe;
}

function cadastra(){
    const banco = JSON.parse(localStorage.getItem("banco"));

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let cep = document.getElementById("cep").value;
    let tiposanguineo = document.querySelector('input[name = "tipo_sanguineo"]:checked').value;
    let senha = document.getElementById('senha').value;
    let confirmaSenha = document.getElementById('confirmasenha').value;

    if(!existe(cpf, banco) && senha == confirmaSenha){
        proximoId = pegaIdMaximo(banco) + 1;
        let novoUsuario = {"id": proximoId, "nome": nome, "cpf": cpf, "email": email, "endereco": endereco, "cep": cep, "tipo_sanguineo": tiposanguineo, "senha": senha};
        banco.push(novoUsuario);
        localStorage.setItem("banco", JSON.stringify(banco));
        window.open("Login.html");
    }
    else{
        alert("JA EXISTE");
    }
}

function loga(){
    const banco = JSON.parse(localStorage.getItem("banco"));

    let cpf = document.getElementById("cpfLogin").value;
    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById('senhaLogin').value;

    if(existe(cpf, banco)){
        for(i = 0; i < banco.length; i++){
            if(cpf == banco[i].cpf && email == banco[i].email && senha == banco[i].senha){
                alert("Bem-vindo!");
                window.open("index.html");
                break;
            }
        }
    }
    else{
        alert("Dados incorretos. Tente novamente")
    }
}