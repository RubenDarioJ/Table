async function getAnimeData() {
    const url = "https://api.nekosapi.com/v3/images";
    let data = [];

    loadingElement.classList.add("show");

    await fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response.items;
            console.log(data)
        })
        .catch(error => {
            console.log("Error:------------");
            console.log(error);
        })
        .finally(() => {
            loadingElement.classList.remove("show");
        });

    return data;
}

async function getAnimeTags() {
    const url = "https://api.nekosapi.com/v3/images/tags";
    let data = [];

    await fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response.items;
        });

    return data;
}

async function addAnimeTags() {
    const data = await getAnimeTags()
    const selectElement = document.querySelector("#search-by-tag");
    data.forEach((tag) => {
        const optionElement = document.createElement("option");
        optionElement.value = tag.name;
        optionElement.innerHTML = tag.name;
        selectElement.appendChild(optionElement);
    });

    selectElement.addEventListener("change", (event) => {
        const value = event.target.value;
        filterByUserTags(value);
    });
}
addAnimeTags();

//raiz

let animeData = [];
let filteredAnimeData = [];

const loadingElement = document.querySelector(".loading");

async function initialize() {
    animeData = await getAnimeData();
    filteredAnimeData = animeData;
    renderImage(filteredAnimeData);
}

function filterByUserTags(tag) {
    filteredAnimeData = animeData.filter((user) => {
        return user.tags.some((item) => item.name.toLowerCase().includes(tag.toLowerCase()));
    });

    renderImage(filteredAnimeData);
}

function filterByRatingAnimeData(rating) {
    filteredAnimeData = animeData.filter((user) => {
        return user.rating === rating;
    });

    renderImage(filteredAnimeData);
}

// function initForm() {
//     const form = document.querySelector("#search-filter");
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const query = event.target['search-by-tag'].value;
//         filterByUserTags(query);
//     });
// }
// initForm();

function clearFilter() {
    filteredAnimeData = animeData
    renderImage(filteredAnimeData);
}

function showModal() {
    const modalElement = document.querySelector(".modal");
    modalElement.classList.add("show");
}

function hideModal() {
    const modalElement = document.querySelector(".modal");
    modalElement.classList.remove("show");
}

function toggleModal() {
    const modalElement = document.querySelector(".modal");
    modalElement.classList.toggle("show");
}

//Borrar elemento seleccionado
function deleteSelectedElement(userId) {
    const filteredAnimeDataIndex = filteredAnimeData.findIndex((user) => user.id === userId);
    filteredAnimeData.splice(filteredAnimeDataIndex, 1);

    const animeDataIndex = animeData.findIndex((user) => user.id === userId);
    animeData.splice(animeDataIndex, 1);

    hideModal();

    renderImage(filteredAnimeData);
}

function showImage(user) {
    const modalHeaderUserIdElement = document.querySelector(".modal-header #user-id");
    modalHeaderUserIdElement.innerHTML = user.id;

    const deleteActionButtonElement = document.querySelector(".modal-header .delete-action");
    deleteActionButtonElement.addEventListener("click", () => deleteSelectedElement(user.id));

    const modalImageElement = document.querySelector(".modal-image");
    modalImageElement.src = user.image_url;

    user.tags.forEach((tag) => {
        const textDescription = document.querySelector(".description");
        const pElement = document.createElement("p");
        pElement.innerHTML = tag.description;
        textDescription.appendChild(pElement);
    })
    showModal();

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

        // mostrar imagen
        const imgElement = document.createElement("img");
        const tdElementImg = document.createElement("td");
        tdElementImg.classList.add("td-image");
        imgElement.src = user.image_url;
        tdElementImg.appendChild(imgElement);
        trElement.appendChild(tdElementImg);
        imgElement.addEventListener("click", () => showImage(user));

        // rating de la imagen
        const pElementRating = document.createElement("p");
        const tdElementText = document.createElement("td");
        tdElementText.classList.add("td-text");
        pElementRating.innerHTML = user.rating;
        tdElementText.appendChild(pElementRating);
        trElement.appendChild(tdElementText);

        // td -> Tags de la imagen
        const tdElementTags = document.createElement("td");

        user.tags.forEach((tag) => {
            const spanTagElement = document.createElement("span");
            spanTagElement.classList.add("tag");
            spanTagElement.innerHTML = tag.name;
            tdElementTags.appendChild(spanTagElement);
        });

        trElement.appendChild(tdElementTags);

        //Borrar lo seleccionado
        const deleteButtonElement = document.createElement("button");
        const buttonTdElement = document.createElement("td");
        buttonTdElement.appendChild(deleteButtonElement);
        deleteButtonElement.innerHTML = "Eliminar";
        deleteButtonElement.classList.add("button-delete");
        trElement.appendChild(buttonTdElement);

        deleteButtonElement.addEventListener("click", () => deleteSelectedElement(user.id));

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
