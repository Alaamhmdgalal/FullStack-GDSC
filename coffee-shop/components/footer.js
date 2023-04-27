class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .footer {
            margin: 30px;
            // text-align: center;
            // justify-content: center;
        }
        
        .footerText {
            color: black;
            font-weight: 200;
            padding: 5px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: small;
        }
        
        .AllIcons {
            display: flex;
            // justify-content: center;
        }

        .Icons {
            margin: 10px;
        }
        
        .smallIcon {
            height: 40px;
            width: 40px;
        }
        </style>
        <div class="footer">
        <div class="AllIcons">
            <div class="Icons">
                <a href="https://instagram.com/"><img src="../imgs/instagram-circle.png" class="smallIcon"></a>
            </div>
            <div class="Icons">
                <a href="https://facebook.com/"><img src="../imgs/facebook-circle.png" class="smallIcon"></a>
            </div>
        </div>
        <p class="footerText">
            © All rights reserved | Alaa Mohamed.
        </p>
    </div>
        `;
    }
}

customElements.define('footer-component', Footer);