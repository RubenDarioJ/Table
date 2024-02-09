const getAnimeData = async () => {
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

const renderizeImage = async () => {
    const animeData = await getAnimeData();

    const containerElement = document.querySelector(".grid-container");

    animeData.forEach((user) => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";

        const animeImage = document.createElement("img");
        animeImage.src = user.image_url;
        animeImage.alt = user.title;

        itemElement.appendChild(animeImage);
        containerElement.appendChild(itemElement);
    })
};

renderizeImage();
