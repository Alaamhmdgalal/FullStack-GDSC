class Item extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>        
        .item-div {
            text-align: center;
            margin: 10px;
            padding: 10px 80px;
            width: 250px;
        }
        
        .item-image {
            height: 200px;
            width: 200px;
            border-radius: 5px;
            border: 1px solid grey;
        }
        
        .item-title {
            color: darkslategray;
            font-weight: 500;
            font-size: 20px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        
        .item-text {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        button {
            border-radius: 20px;
            padding: 5px;
            background-color: white;
            height: 35px;
            width: 125px;
        }

        button:hover {
            border: 2px solid black;
            color: black;
            background: rgba(165,42,42, 0.5);
        }
        </style>
        <div class="item-div">
            <img src="../imgs/coffee.jpg" class="item-image">
            <h2 class="item-title">Iced White Chocolate Mocha</h2>
            <p class="item-text">
            Espresso, milk and white chocolate flavoured sauce poured over ice. Topped with sweetened whipped cream
            </p>
            <button type="button">Get it delivered</button>
        </div>
        `;
    }
}

customElements.define('item-component', Item);