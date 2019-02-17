import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
export default class FavoritesList extends LitElement {
    constructor(){
        super();
        
    }

    static get properties(){
        return {
           
        }
    };

    firstUpdated() {
      
    }

   
                                    
    render(){
        let self=this;
        
        return html`
        <style>
        @import 'css/global.css';
            .favorites{
                max-width: 800px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr ;
                grid-gap: 1em;

            }
            h2{
                color: #3e4162;
                font-weight: 300;
                grid-column: 1/4;
            }
            .card{
                width:100%;
                display: grid;
                grid-template-columns: 1fr  1fr;
                color: #3d4060;
                border-radius: 10px;
                transition: all .4s ease-in-out;
                cursor: pointer;        
                padding: 15px 0 0;        
                grid-gap: 15px;
                -webkit-box-shadow: 4px 4px 36px 2px rgba(0,0,0,0.14);
                -moz-box-shadow: 4px 4px 36px 2px rgba(0,0,0,0.14);
                box-shadow: 4px 4px 36px 2px rgba(0,0,0,0.14);
            }

            .user-image{
                background-image: url('https://randomuser.me/api/portraits/women/44.jpg');
                height : 80px;
                width: 80px;
                background-size: cover;
                background-position: center;
                border-radius: 50%;          
                grid-column:1/3; 
                align-self: center;
                justify-self: center;   
            }

            .fullname{                
                font-weight: 700;
                text-tranform: capitalize;
                grid-column:1/3;                
                border-bottom: 1px solid rgba(0,0,0,0.1) ;
            }

            .number{
                font-weight: 500;
                grid-column:1/3;               
                border-bottom: 1px solid rgba(0,0,0,0.1) ;
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

            .category{
                border-left: 1px solid rgba(0,0,0,0.1) ;
            }

            .fullname, .user-image,.number, .state,.category{
                font-size: 1.4rem;
                fnt-weight: 100;
                padding: 15px;

            }

        </style>
        

        <h2>Favorites</h2>
        <section class="favorites">            
            <div class="card">                
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
            <div class="card">                
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
            <div class="card">                
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
           
customElements.define('favorites-list',FavoritesList);