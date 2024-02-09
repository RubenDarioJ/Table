// const { filter } = require("vue/types/umd");

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


// async function filterNSFW() {
//     const filter = await getAnimeData();
//     // let hideElement = document.querySelector(".button-filter");
//     filter.forEach((user) => {
//         if(user.rating != 'safe') {
//             // console.log('funciona');
//             // hideElement.style.display = "none";
//             animeImage.style.display= "none";
//         }
//     })
//     return filter;
// }

// // filterNSFW();

// function filterNSFW(animeImage, user) {
//     if(user.rating != 'safe') {
//         animeImage.style.display = "none";
// }
// }

// function bringItBack(animeImage, user) {
//     if(user.rating) {
//         animeImage.style.display = "block";
//     }
// }

async function renderImage() {
    const animeData = await getAnimeData();
    // const filterData = await filterNSFW();

    const tableElement = document.querySelector(".custom-table");

    animeData.forEach((user) => {
        const trElement = document.createElement("tr");

        //mostrar ID
        let tdEelement = document.createElement("td");
        tdEelement.innerHTML = user.id;
        tdEelement.style.textAlign = "center";
        trElement.appendChild(tdEelement);

        //rating de la imagen

        tdEelement = document.createElement("td");
        tdEelement.classList.add("td-text");
        tdEelement.innerHTML = user.rating;
        trElement.appendChild(tdEelement);

        //mostrar imagen
        const animeImage = document.createElement("img");
        tdEelement = document.createElement("td");
        tdEelement.classList.add("td-image");
        animeImage.src = user.image_url;
        tdEelement.appendChild(animeImage);
        trElement.appendChild(tdEelement);

        //esconder imagen
        // filterNSFW(animeImage, user);

        const nsfwButton = document.querySelector(".button-filter");
        nsfwButton.addEventListener("click", () => {
            if(user.rating != 'safe') {
            animeImage.style.display = "none";
        };
});
        const nsfwDisplay = document.querySelector(".button-display");
                nsfwDisplay.addEventListener("click", () => {
                    if(animeImage.style.display = "none") {
                    animeImage.style.display = "block";
                };
        });
        tableElement.querySelector("tbody").appendChild(trElement);
    })
}

renderImage();