const getAnimeData = async () => {
    const url = "https://api.nekosapi.com/v3/images";
    let data = [];

    loadingWebsite.classList.add("show");

    await fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response.items;
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            loadingWebsite.classList.remove("show")
        })

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

let animeData = [];
let filteredAnimeData = [];

async function start() {
    animeData = await getAnimeData();
    filteredAnimeData = animeData
    renderizeImage(filteredAnimeData);
}

function deleteElements(userId, itemElement) {
    const filteredDataIndex = filteredAnimeData.findIndex((user) => user.id === userId)
    console.log(filteredDataIndex)
    filteredAnimeData.splice(filteredDataIndex, 1);

    const animeDataIndex = animeData.findIndex((user) => user.id === userId)
    animeData.splice(animeDataIndex, 1)
    console.log(userId)

    const containerElement = document.querySelector(".grid-container");

    containerElement.removeChild(itemElement)

    renderizeImage(filteredAnimeData);
    hideModal();
}

function filterNSFW(rating) {
    // const buttonFilter = document.querySelector(".filter-nsfw");
    filteredAnimeData = animeData.filter((user) => {
       return user.rating === rating
    })
    console.log(filteredAnimeData)
    renderizeImage(filteredAnimeData);
}

function showModal() {
    const displayModal = document.querySelector(".modal");
    displayModal.classList.add("show");
}

function toggleModal() {
    const displayModal = document.querySelector(".modal");
    displayModal.classList.toggle("show");
}

function showImage(user, itemElement) {
    const modalAnimeImage = document.querySelector(".modal-image");
    modalAnimeImage.src = user.image_url;

    const imageId = document.querySelector("#image-id")
    imageId.innerHTML = user.id

    showModal();

    const deleteImage = document.querySelector(".action-delete");
    deleteImage.addEventListener("click", () => deleteElements(user.id, itemElement))

    const textDescription = document.querySelector(".description");
    textDescription.innerHTML = "";
    user.characters.forEach((character) => {
        const pElement = document.createElement("p");
        pElement.innerHTML = character.description;
        textDescription.appendChild(pElement);
    })

    // user.tags.forEach((tag) => {
    //     const pElement = document.createElement("p");
    //     pElement.innerHTML = tag.description;
    //     textDescription.appendChild(pElement);
    // })

        // deleteElements(user.id)
}

function hideModal() {
    const hideModal = document.querySelector(".modal");
    hideModal.classList.remove("show")
}

const loadingWebsite = document.querySelector(".loading")


async function animeTags() {
    const data = await getAnimeTags();
    const tagElement = document.querySelector("#search-by-tag");
    data.forEach((tag) => {
        const optionElement = document.createElement("option");
        optionElement.value = tag.name;
        optionElement.innerHTML = tag.name;
        // optionElement.style.textTransform = "capitalize";
        tagElement.appendChild(optionElement);
    })

    tagElement.addEventListener("change", (event) => {
        const value = event.target.value;
        filterByUserTags(value);
    })
}

animeTags();


function filterByUserTags(tag) {
    filteredAnimeData = animeData.filter((user) => {
        return user.tags.some((item) => item.name.toLowerCase().includes(tag.toLowerCase()));
    });
    console.log(filteredAnimeData)
    renderizeImage(filteredAnimeData);
}

const renderizeImage = async (animeData) => {
    // const animeData = await getAnimeData();

    const containerElement = document.querySelector(".grid-container");

    animeData.forEach((user) => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";

        const animeImage = document.createElement("img");
        animeImage.src = user.image_url;
        animeImage.alt = user.title;
        // animeImage.addEventListener("click", () => {
        //     console.log(user.rating);
        // })

        animeImage.addEventListener("click", () => {
            showImage(user, itemElement)
        })

        // filterNSFW(user.rating);


        itemElement.appendChild(animeImage);
        containerElement.appendChild(itemElement);
    })
};

start();
