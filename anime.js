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

let animeData = [];
async function initialize() {
    animeData = await getAnimeData();
    renderImage(animeData);
}

function filterByRatingAnimeData(rating) {
    const filterData = animeData.filter((user) => {
        return user.rating === rating;
    });

    renderImage(filterData);
}

function clearFilter() {
    renderImage(animeData);
}

async function renderImage(animeData) {
    const tBodyElement = document.querySelector(".custom-table tbody");
    tBodyElement.innerHTML = "";

    animeData.forEach((user) => {
        const trElement = document.createElement("tr");

        // mostrar ID
        const pElementId = document.createElement("p");
        const tdElement = document.createElement("td");
        tdElement.classList.add("td-id");
        pElementId.innerHTML = user.id;
        tdElement.appendChild(pElementId);
        tdElement.style.textAlign = "center";
        trElement.appendChild(tdElement);

        // rating de la imagen
        const pElementRating = document.createElement("p");
        const tdElementText = document.createElement("td");
        tdElementText.classList.add("td-text");
        pElementRating.innerHTML = user.rating;
        tdElementText.appendChild(pElementRating);
        trElement.appendChild(tdElementText);

        // mostrar imagen
        const imgElement = document.createElement("img");
        let tdElementImg = document.createElement("td");
        tdElementImg.classList.add("td-image");
        imgElement.src = user.image_url;
        tdElementImg.appendChild(imgElement);
        trElement.appendChild(tdElementImg);

        tBodyElement.appendChild(trElement);
    })
}

initialize();


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
