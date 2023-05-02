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
            margin: 0px 15px;
            transform: translateY(-2px);
            height: 50px;
            width: 50px;
        }

        .navbar {
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        }
        
        .nav-item {
            display: block;
            float: left;
            text-align: center;
            padding: 20px 16px;
            color: black;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: 500;
            text-transform: uppercase;
        }
        
        .nav-link:hover {
            color: brown !important;
        }
        
        a {
            color: black;
        }
        </style>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="../coffee-shop/homepage.html" style="color: #B87333; font-weight:500;">
                    <img class="logo" src="../imgs/cup.png" alt="Bootstrap" width="30" height="24">
                    Coffee Shop
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../coffee-shop/menu.html">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../coffee-shop/about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../coffee-shop/contact-us.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('header-component', Header);