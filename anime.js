async function getAnimeData() {
    const url = "https://api.nekosapi.com/v3/images";
    let data = [];

    await fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response.items;
            console.log(data);
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
        let pElementId = document.createElement("p");
        let tdElement = document.createElement("td");
        tdElement.classList.add("td-id");
        pElementId.innerHTML = user.id;
        tdElement.appendChild(pElementId);
        tdElement.style.textAlign = "center";
        trElement.appendChild(tdElement);

        //rating de la imagen
        const pElementRating = document.createElement("p");
        const tdElementText = document.createElement("td");
        tdElementText.classList.add("td-text");
        pElementRating.innerHTML = user.rating;
        tdElementText.appendChild(pElementRating);
        trElement.appendChild(tdElementText);

        //mostrar imagen
        const imgElement = document.createElement("img");
        let tdElementImg = document.createElement("td");
        tdElementImg.classList.add("td-image");
        imgElement.src = user.image_url;
        tdElementImg.appendChild(imgElement);
        trElement.appendChild(tdElementImg);

        //esconder imagen click function
        const nsfwButton = document.querySelector(".button-filter, .td-text");
        nsfwButton.addEventListener("click", () => {
            if(user.rating != 'safe') {
            pElementId.style.display = "none";
            tdElement.style.visibility ="hidden";
            pElementRating.style.display = "none";
            tdElementText.style.visibility ="hidden";
            imgElement.style.display = "none";
            tdElementImg.style.display ="none";
        };
});

        //mostrar imagen click function
        const nsfwDisplay = document.querySelector(".button-display");
        nsfwDisplay.addEventListener("click", () => {
            if(imgElement.style.display = "none") {
            pElementId.style.display = "block";
            tdElement.style.visibility ="visible";
            pElementRating.style.display = "block";
            tdElementText.style.visibility ="visible";
            tdElementImg.style.display ="flex";
            imgElement.style.display = "block";
                };
        });

        tableElement.querySelector("tbody").appendChild(trElement);
    })
}

renderImage();


// async function filterNSFW() {
//     const filter = await getAnimeData();
//     // let hideElement = document.querySelector(".button-filter");
//     filter.forEach((user) => {
//         if(user.rating != 'safe') {
//             // console.log('funciona');
//             // hideElement.style.display = "none";
//             imgElement.style.display= "none";
//         }
//     })
//     return filter;
// }
