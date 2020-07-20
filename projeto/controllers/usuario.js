const fEmpresa = document.getElementById('formEmpresa');

formEmpresa.addEventListener('submit', (e) => {
    e.preventDefault();

    const idEmpresa = document.getElementById('id_empresa').value;
    const nomeUsuario = document.getElementById('nome_usuario').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    const dataNasc = document.getElementById('data_nasc').value;

    heads = new Headers();

    // POST
    fetch('https://localhost:44379/usuario', {
        method: 'POST',
        body: JSON.stringify({
            id_empresa: idEmpresa,
            nome_usuario: nomeUsuario,
            cpf: cpf,
            email: email,
            sexo: sexo,
            dataNasc: dataNasc
        }),
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: heads,
        mode: 'cors',
    })
    .then(response => {
        console.log('Response', response);
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

    // GET
    fetch('https://localhost:44379/usuario', {
        method: 'GET'
    })
    .then(response => {
        return response.json
    }).then(data => {
        console.log(data);
    })
});