const apiResult = [{
    image: "../imgs/coffee.jpg",
    title: "Title 1",
    description: "Description 1",
}, {
    image: "../imgs/coffee.jpg",
    title: "Title 2",
    description: "Description 2",
}, {
    image: "../imgs/coffee.jpg",
    title: "Title 3",
    description: "Description 3",
},
{
    image: "../imgs/coffee.jpg",
    title: "Title 4",
    description: "Description 4",
},
{
    image: "../imgs/coffee.jpg",
    title: "Title 5",
    description: "Description 5",
}];

const grid = document.getElementById("grid-container");
const container = document.getElementById('item-div');

apiResult.forEach((result, idx) => {
    // Create card element
    for (let i = 0; i < apiResult.length; i++) {
        let item_div = document.createElement("div");
        item_div.className = 'item-div';
        grid.appendChild(item_div);
    }

    // Construct card content
    const content = `
        <div id="item" data-index=${idx}>
            <img src="${result.image}" class="item-image">
            <h2 class="item-title">${result.title}</h2>
            <p class="item-text">${result.description}</p>
            <button type="button">Get it delivered</button>
        </div>
    `;
    // Append newyly created card element to the container
    container.innerHTML += content;
})
