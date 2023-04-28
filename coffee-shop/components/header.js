class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .top-bar {
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
            position: relative;
        }

        .logo {
            padding: 0px;
            margin: 10px 30px;
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
            position: absolute;
            display: flex;
            padding: 10px;
            top: 60%;
            left: 85%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        
        .location-text {
            padding-left: 10px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: 500;
        }
        
        .top-nav {
            position: absolute;
            list-style-type: none;
            margin: 0px;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%); 
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
            <a href="../coffee-shop/homepage.html"><img src="../imgs/cup.png" class="logo"></a>
            <ul class="top-nav">
                <a href="../coffee-shop/menu.html">
                    <li>Menu</li>
                </a>
                <a href="../coffee-shop/about-us.html">
                    <li>About Us</li>
                </a>
                <a href="../coffee-shop/contact-us.html">
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