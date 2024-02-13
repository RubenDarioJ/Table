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

//raiz

let animeData = [];
let filteredAnimeData = [];

async function initialize() {
    animeData = await getAnimeData();
    filteredAnimeData = animeData;
    renderImage(filteredAnimeData);
}

function filterByRatingAnimeData(rating) {
     filteredAnimeData = animeData.filter((user) => {
        return user.rating === rating;
    });

    renderImage(filteredAnimeData);
}

function clearFilter() {
    filteredAnimeData = animeData
    renderImage(filteredAnimeData);
}

//Borrar elemento seleccionado
function deleteSelectedElement(index) {
    filteredAnimeData.splice(index, 1);
    animeData.splice(index, 1);
    renderImage(filteredAnimeData);
      // animeData = animeData.filter((user) => {
    //     return user.id !== FilteredAnimeData[index].id
    // })
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
        const tdElementImg = document.createElement("td");
        tdElementImg.classList.add("td-image");
        imgElement.src = user.image_url;
        tdElementImg.appendChild(imgElement);
        trElement.appendChild(tdElementImg);

        //Borrar lo seleccionado
        const deleteButtonElement = document.createElement("button");
        const buttonTdElement = document.createElement("td");
        buttonTdElement.appendChild(deleteButtonElement);
        deleteButtonElement.innerHTML = "Eliminar";
        deleteButtonElement.classList.add("button-delete");
        trElement.appendChild(buttonTdElement);

        deleteButtonElement.addEventListener("click", () => deleteSelectedElement(animeData.indexOf(user)));

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

// function deleteButtonGlobal(deleteButtonElement, buttonTdElement) {
//    const deleteSelect = animeData.filter((user) => {
//     return user.image_url;
//    });

//    renderImage(deleteSelect);
// }

// function pruebaDelete() {
//     const filterButton = animeData.filter((user) => {
//         return user.rating === 'safe';
//     });
//     console.log('This function is working')
//     renderImage(filterButton)
// }
