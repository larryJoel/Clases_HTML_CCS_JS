const URL = 'https://dog.ceo/api/breeds/image/random';

const imagen = async(URL)=>{
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
}

fetch(URL)
.then(res => res.json())
.then (response => {
    console.log(response.message);
    var res = response.message;  
    var imgElement = document.getElementById("foto");
    imgElement.src = res;
})



