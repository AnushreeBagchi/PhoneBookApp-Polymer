import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import ContactsList from '/js/component/ContactsList.js'
import FavoritesList from '/js/component/FavoritesList.js'
export default class FormPopup extends LitElement {
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

            .form-popup{
                background: #2b304c;
                height: 100vh;
                width: 100vw;
                position: fixed;
                top: 0;
                left:0;
                display: flex;
                justify-content: center;
                align-items: center;
                visibility: hidden;
                transition: all .4s ease-in-out;
                opacity:0;
            }

            .form-popup .active{
                visibility:visible;
            }

            form{
                background: white;
                padding: 20px;
                border-radius: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 20px;
                width: 400px;
                position: relative;
            }
            h2{
                font-size:1.2rem;
                font-weight: 500;
                grid-column: 1/5;
            }

            .form-group{
               padding: 0 ; 
               position: relative; 
               
            }

            label{
                background: white;
                font-size: 0.7rem;
                position : absolute;
                top: -5px;
                display: inline-block;
            }

            .form-group input{
                padding: 10px;
                display: block;
                width: 100%;
            }

            .firstname{
                grid-column: 1/3;
            }

            .lastname{
                grid-column: 3/5;
            }

            .address_1{
                grid-column: 1/5;
            }

            .address_2{
                grid-column: 1/5;
            }

            .city{
                grid-column: 1/3;
            }

            .button{
                justify-self: end;
                grid-column: 4/5;
                
               
            }

            .button button{
                padding: 10px 25px;
                cursor: pointer;
                background: #1e5799; /* Old browsers */
                background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #7db9e8 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                border: none;
                color: white;
                border-radius:5px;
            }

            .closing-btn{
                position: absolute;
                right:0;
                top:0;
                padding: 1em;
                cursor: pointer;

            }
            .closing-btn svg{
                height: 1em;
                width: 1em;
                color  : #2576C0;
            }

        </style>
       
        <section class="form-popup">
            <form>
                <div class="closing-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>
                <h2>Add a new contact</h2>
                
                <div class="form-group firstname">   
                    <label for="firstname">First Name</label>
                    <input type="text" name="firstname">
                </div>

                <div class="form-group lastname">   
                    <label for="lastname">Last Name</label>
                    <input type="text" name="lastname">
                </div>

                <div class="form-group address_1">   
                    <label for="address_1">Address #1</label>
                    <input type="text" name="address_1">
                </div>

                <div class="form-group address_2">   
                    <label for="address_2">Address #2</label>
                    <input type="text" name="address_2">
                </div>

                <div class="form-group city">   
                    <label for="city">City</label>
                    <input type="text" name="city">
                </div>

                <div class="form-group state">   
                    <label for="state">State</label>
                    <input type="text" name="state">
                </div>

                <div class="form-group zip">   
                    <label for="zip">Zip Code</label>
                    <input type="text" name="zip">
                </div>
                <div class="form-group button ">   
                    <button type="submit" >Add</button>
                </div>
            </form>       
    </section>
    `

    }
}
           
customElements.define('form-popup',FormPopup);