const URL3 = 'https://jsonplaceholder.typicode.com/todos'
fetch(URL3)
    .then(response => response.json())
    .then(data => console.log(data))