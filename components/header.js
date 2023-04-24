class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .top-bar {
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        }

        .logo {
            padding: 10px;
            margin-left: 30px;
            height: 60px;
            width: 60px;
        }
    
        .location-logo {
            height: 25px;
            width: 25px;
            float: right;
            margin-top: 0px;
        }
    
        .location {
            float: right;
            display: flex;
            padding: 10px;
            margin-top: 25px;
            margin-right: 30px;
        }
        
        .location-text {
            padding-left: 10px;
            margin-top: 5px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: 500;
        }
        
        .top-nav {
            list-style-type: none;
            margin: 0;
            display: inline-block;
        }
        
        li {
            display: block;
            float: left;
            text-align: center;
            padding: 20px 16px;
            color: black;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: 500;
            text-transform: uppercase;
        }
        
        li:hover {
            color: brown;
        }
        
        a {
            color: black;
        }
        </style>
        <div class="top-bar">
            <a href="../Project/homepage.html"><img src="../imgs/cup.png" class="logo"></a>
            <ul class="top-nav">
                <a href="../Project/menu.html">
                    <li>Menu</li>
                </a>
                <a href="../Project/about-us.html">
                    <li>About Us</li>
                </a>
                <a href="../Project/contact-us.html">
                    <li>Contact Us</li>
                </a>
            </ul>
            <div class="location">
                <!-- msh 3arfa a3ml add lel location picker lesa -->
                <!-- <a onclick=""></a>  -->
                <img src="../imgs/location.jpeg" class="location-logo">
                <p class="location-text">Find a store</p>
            </div>
        </div>
        `;
    }
}

customElements.define('header-component', Header);