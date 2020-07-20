const fEmpresa = document.getElementById('formTeste');

formEmpresa.addEventListener('submit', (e) => {
    e.preventDefault();

    const idEmpresa = document.getElementById('id_empresa').value;
    const idUsuario = document.getElementById('id_usuario').value;

    heads = new Headers();

    fetch('https://localhost:44379/teste', {
        method: 'POST',
        body: JSON.stringify({
            id_empresa: idEmpresa,
            id_usuario: idUsuario,
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
});

// GET

// GET ID

// POST

// PUT

// DELET