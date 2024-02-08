let animeData = [ 
{
    id: 301, 
    id_v2: '1468b1d2-b70d-4fd8-84ad-de4f51996f2d', 
    image_url: 'https://cdn.nekosapi.com/images/original/7d0a2260-9a84-4bfb-bb11-f26ed2722dc7.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/da6794dc-ca61-4769-ac7b-884f6092361e.webp', 
    image_size: 230286},
{
    id: 323, 
    id_v2: '15c3e176-984f-4479-916d-7f00d9a90c1c', 
    image_url: 'https://cdn.nekosapi.com/images/original/dfd7c62c-0dfd-4b56-9a82-f723186fed2f.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/7a0bb104-d865-4127-83ed-46eb8c2dbe25.webp', 
    image_size: 338264},
{
    id: 357, 
    id_v2: '18c9ff1f-fd49-4b02-ba84-9463170e65e2', 
    image_url: 'https://cdn.nekosapi.com/images/original/5bd81698-a9fa-4f33-aeac-0a01d9ff0efd.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/0ba9b9bc-d951-432e-a3f4-c67d132c8ab5.webp', 
    image_size: 344208},
{
    id: 366, 
    id_v2: '19791532-718e-4a2d-a9e9-28d8c1f5e726', 
    image_url: 'https://cdn.nekosapi.com/images/original/88ff41df-4ee1-4038-9f3d-221880aecd74.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/228279d7-a29d-4de9-a8f8-c4a87f3a9788.webp', 
    image_size: 296898},
{
    id: 373, 
    id_v2: '19db34d6-fc36-4579-988f-3e39140de4a9', 
    image_url: 'https://cdn.nekosapi.com/images/original/f0520397-39d7-46e8-84a3-007fda75b677.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/d12bd76b-ee8f-475a-9e20-df99dcd80f68.webp', 
    image_size: 350024},
{
    id: 394, 
    id_v2: '1bae1549-3e91-4cac-bf39-c59b8b68aef5', 
    image_url: 'https://cdn.nekosapi.com/images/original/9c074440-064c-4b04-8783-ac5884e96166.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/3089b83e-8dfb-4d40-a347-e4c85bc8f3e1.webp', 
    image_size: 344234},
{
    id: 410, 
    id_v2: '1ce28ae2-d015-4dd2-a0f7-fcf46a8f667c', 
    image_url: 'https://cdn.nekosapi.com/images/original/0d92092f-bbae-4281-833b-6321435bfb67.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/ce224d7b-741e-453c-8693-68929c16fe44.webp', 
    image_size: 374060},
{
    id: 459, 
    id_v2: '2043edb9-c2d2-47cb-9d89-47a448c2c3ce', 
    image_url: 'https://cdn.nekosapi.com/images/original/73d54002-8d7e-4a15-9a16-9c219a048583.webp', 
    sample_url: 'https://cdn.nekosapi.com/images/360/2c7d8c60-b895-4436-8f67-e2becef88d4e.webp', 
    image_size: 239146},
]

function getAnime(anime) {
    let randomImage = anime.image_url
    return randomImage
}

for (let i = 0; i < animeData.length; i++) {
    const anime = animeData[i];
    getAnime(anime)
   
}


function renderImage() {
    let tableElement = document.querySelector(".custom-table");
    animeData.forEach((user) => {
    let trElement = document.createElement("tr");

    //mostrar ID
    let tdEelement = document.createElement("td");
    tdEelement.innerHTML = user.id;
    trElement.appendChild(tdEelement);

    //mostrar imagen
    const animeImage = document.createElement("img");
    tdEelement = document.createElement("td");
    animeImage.classList.add("td-image");
    animeImage.src = user.image_url;
    tdEelement.appendChild(animeImage);
    trElement.appendChild(tdEelement)

    tableElement.querySelector("tbody").appendChild(trElement);
    })
}

renderImage(animeData);







// )
//     .catch(error => console.error(error))


    // fetch("https://api.nekosapi.com/v3/images")
    // .then(response => response.json())
    // .then(data => {
    //     for (let i = 0; i < data.length; i++) {
    //         console.log(data.data[i].img.url)
    //     }
    // })
    // .catch(error => console.error(error))




// fetch("https://api.nekosapi.com/v3/images")
//     .then(response => response.json())
//     .then(data => console.log(data.items[2].image_url))
//     .catch(error => console.error(error))

    // async function fetchData(anime){
    //     try{
    //         const response = await fetch("https://api.nekosapi.com/v3/images");

    //         if(!response.ok){
    //             throw new Error("Could not fetch resource");
    //         }

    //         const data = await response.json();
    //         console.log(data.items[i].image_url)
    //     }
    //     catch(error){
    //         console.error(error)
    //     }
        
    // }



    // for (i = 0; i < data.length; i++) {
    //     anime = data.items[i].image_url
    //     fetchData(anime)
    // }

    // Define the image_url variable


    
// const anime = [
//     {
//         id: 1,
//         url: "https://pic.re/image",
//     },
//     {
//         id: 2,
//         url: "https://pic.re/image",
//     },
//     {
//         id: 3,
//         url: "https://pic.re/image",
//     },
//     {
//         id: 4,
//         url: "https://pic.re/image",
//     },
//     {
//         id: 5,
//         url: "https://pic.re/image",
//     },

// ]

// function renderImage() {
//     let tableElement = document.querySelector(".custom-table");
//     anime.forEach((user) => {
//     let trElement = document.createElement("tr");

//     //mostrar ID
//     let tdEelement = document.createElement("td");
//     tdEelement.innerHTML = user.id;
//     trElement.appendChild(tdEelement);

//     //mostrar imagen
//     const animeImage = document.createElement("img");
//     tdEelement = document.createElement("td");
//     animeImage.classList.add("td-image");
//     animeImage.src = user.url;
//     tdEelement.appendChild(animeImage);
//     trElement.appendChild(tdEelement)

//     tableElement.querySelector("tbody").appendChild(trElement);
//     })
// }

// renderImage(anime);


// function images(image) {
//     const user = anime.find((userx) => userx.id === image );
//     return user;
// }

// console.log(images(1))
