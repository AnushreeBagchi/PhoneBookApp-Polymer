import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
export default class SideMenu extends LitElement {
    constructor(){
        super();
        
    }

    static get properties(){
        return {
           
        }
    };

    firstUpdated() {
        console.log('loaded');       
    }
                                    
    render(){
        let self=this;
        return html`
        <style>
        @import 'css/global.css';
        
        #side-menu{
            
            background:#323759;
            height: 100vh;
            padding: 25px 25px;
        }
        
        #side-menu nav a{
           color: #ccced7;
           text-decoration: none;
           text-transform: capitalize;
           display: block;
           padding: 10px 10px 10px 0;
        }   

        #side-menu nav a span.icon{
            padding: 10px 10px 10px 0;
        }   

        .title{
            font-weight: 700;
            color: #ccced7;
            margin: 1rem 0;
        }

        .logo{
            text-align: center;
        }

        .logo img{
            width:  50px;
        }
 
        </style>
       
        <section id="side-menu">
            <div class="logo">
                <img src="http://transformations-spafitness.com/wp-content/uploads/2013/11/google-logo-icon-PNG-Transparent-Background-1.png">
            </div>
            <div class="menu">
                <div class="title">Contacts</div>
                <nav>
                    <a href="#"><span class='icon'>+</span>Add Contacts</a>
                    <a href="#"><span class='icon'>+</span>Add Contacts</a>
                    <a href="#"><span class='icon'>+</span>Add Contacts</a>
                    <a href="#"><span class='icon'>+</span>Add Contacts</a>
                </nav>
            </div>
        </section>
        `
    }
}
           
customElements.define('side-menu',SideMenu);