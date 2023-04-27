class HomeButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .item {
            height: 370px;
            width: 400px;
            border-radius: 5px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        }

        .button-image {
            height: 200px;
            width: 400px;
        }

        .button-title {
            margin: 16px 20px;
            color: darkslategray;
            font-weight: 500;
            font-size: 20px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        .text {
            margin: 16px 20px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        button {
            border-radius: 20px;
            padding: 5px;
            margin: 7px 20px;
            background-color: white;
            height: 35px;
            width: 125px;
        }

        button:hover {
            border: 2px solid black;
            color: black;
            background: rgba(165,42,42, 0.5);
        }

        a {
            color: black;
            text-decoration: none;
        }
        </style>
        <div class="item">
            <img src="../imgs/coffee-home.jpg" class="button-image">
            <h2 class="button-title">Our Coffee</h2>
            <p class="text">
            Discover our items and start ordering your favourite coffee
            </p>
            <button type="button"><a href="../Project/menu.html">Menu</a></button>
        </div>
        `;
    }
}

customElements.define('home-item-component', HomeButton);