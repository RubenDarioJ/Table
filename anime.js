async function getAnimeData() {
    const url = "https://api.nekosapi.com/v3/images";
    let data = [];

    await fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response.items;
        })
        .catch(error => console.error(error));

    return data;
}

async function renderImage() {
    const animeData = await getAnimeData();

    const tableElement = document.querySelector(".custom-table");

    animeData.forEach((user) => {
        const trElement = document.createElement("tr");

        //mostrar ID
        let tdEelement = document.createElement("td");
        tdEelement.innerHTML = user.id;
        tdEelement.style.textAlign = "center";
        trElement.appendChild(tdEelement);

        //mostrar imagen
        const animeImage = document.createElement("img");
        tdEelement = document.createElement("td");
        tdEelement.classList.add("td-image");
        animeImage.src = user.image_url;
        tdEelement.appendChild(animeImage);
        trElement.appendChild(tdEelement);

        tableElement.querySelector("tbody").appendChild(trElement);
    })
}

renderImage();

console.log('hola');

console.log('otra prueba');

console.log('cuenta princial')

console.log('cuenta princial')

console.log('main')