import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
export default class ContactsList extends LitElement {
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
            .contacts{
                max-width: 800px;

            }
            h2{
                color: #3e4162;
                font-weight: 300;
            }
            .contact{
                width:100%;
                display: grid;
                grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
                color: #3d4060;
                padding: 20px;
                border-radius: 10px;
                transition: all .4s ease-in-out;
                cursor: pointer;
                
            }

            .contact:hover{
                -webkit-box-shadow: 4px 4px 36px 2px rgba(0,0,0,0.14);
                -moz-box-shadow: 4px 4px 36px 2px rgba(0,0,0,0.14);
                box-shadow: 4px 4px 36px 2px rgba(0,0,0,0.14);
            }
            .user-image{
                background-image: url('https://randomuser.me/api/portraits/women/44.jpg');
                height : 40px;
                width: 40px;
                background-size: cover;
                background-position: center;
                border-radius: 10px;
                
            }

            .contact .fullname{
                
                font-weight: 700;
                text-tranform: capitalize;
            }

            .contact .number{
                font-weight: 500;

            }

            .text{
                display: block;
                text-align: center;
            }

            .sub{
                display: block;
                color: #b4b5c4;
                font-weight: 300;
                font-size:0.8rem;
                text-align: center;

            }

            .fullname, .user-image,.number, .state,.category{
                font-size: 1.4rem;
                fnt-weight: 100;

            }

        </style>
        
        <section class="contacts">
            <h2>Contacts</h2>
            <div class="contact">                
                <div class="user-image"></div>
                <div class="fullname">
                    <span class="text">Joe Sanos Garcia</span>
                    <span class="sub">Full Name</span>
                </div>
                <div class="number">
                    <span class="text">888-88-88</span>
                    <span class="sub">Phone number</span>
                </div>
                <div class="state">
                    <span class="text">NY</span>
                    <span class="sub">State</span>
                </div>
                <div class="category">
                    <span class="text">Family</span>
                    <span class="sub">Category</span>
                </div>
            </div>

            <div class="contact">                
                <div class="user-image"></div>
                <div class="fullname">
                    <span class="text">Joe Sanos Garcia</span>
                    <span class="sub">Full Name</span>
                </div>
                <div class="number">
                    <span class="text">888-88-88</span>
                    <span class="sub">Phone number</span>
                </div>
                <div class="state">
                    <span class="text">NY</span>
                    <span class="sub">State</span>
                </div>
                <div class="category">
                    <span class="text">Family</span>
                    <span class="sub">Category</span>
                </div>
            </div>
        </section>
        `

    }
}
           
customElements.define('contacts-list',ContactsList);