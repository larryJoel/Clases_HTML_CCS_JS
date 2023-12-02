const URL2 ='https://jsonplaceholder.typicode.com/users'
const listaUsuarios = document.getElementById('lista_usuarios')

fetch(URL2)
.then(response => response.json())
.then(data => {
    data.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML= usuario.name + "<br>" + "telefono" + usuario.phone +"<hr>";
        lista_usuarios.append(li)
    });
})