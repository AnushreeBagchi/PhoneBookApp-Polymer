import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import ContactsList from '/js/component/ContactsList.js'
import FavoritesList from '/js/component/FavoritesList.js'
import SideMenu from '/js/component/SideMenu.js'
import ContentArea  from '/js/component/ContentArea.js'

export default class FormPopup extends LitElement {
    constructor(){
        super();
        this.formData={};
        this.change=this.change.bind(this);
        
    }

    static get properties(){
        return {
            popupOpen: Boolean,
            formData:Object,
            allContacts: {type: Array}
        }
    };

    firstUpdated() {
        
    }

    toggleDisplay(){
        this.classList.add('hide')
       
    }

    change(event){
        let formData={};
        let name=event.target.name;
        let value= (event.target.type==='checkbox')? event.target.checked : event.target.value
        formData[name]=value;
        this.formData=Object.assign(this.formData,formData);
        console.log(this.formData);
    }

    addContact(event){
        this.allContacts.push(this.formData);
        console.log(this.allContacts);
        event.preventDefault();
    }
                                    
    render(){
        let self=this;
        
        return html`
        <style>
            @import 'css/global.css';
            @import 'css/FormPopupStyle.css';
            
        </style>
      
        <section class="form-popup ">
            <form>
                <div class="closing-btn" @click="${this.toggleDisplay}">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>
                <h2>Add a new contact</h2>
                
                <div class="form-group firstname">   
                    <label for="firstname">First Name</label>
                    <input type="text" name="firstname" @keyup="${this.change}">
                </div>

                <div class="form-group lastname">   
                    <label for="lastname">Last Name</label>
                    <input type="text" name="lastname"  @keyup="${this.change}">
                </div>

                <div class="form-group address_1">   
                    <label for="address_1">Address #1</label>
                    <input type="text" name="address_1"  @keyup="${this.change}">
                </div>

                <div class="form-group address_2">   
                    <label for="address_2">Address #2</label>
                    <input type="text" name="address_2"  @keyup="${this.change}">
                </div>

                <div class="form-group city">   
                    <label for="city">City</label>
                    <input type="text" name="city"  @keyup="${this.change}">
                </div>

                <div class="form-group state">   
                    <label for="state">State</label>
                    <input type="text" name="state"  @keyup="${this.change}">
                </div>

                <div class="form-group zip">   
                    <label for="zip">Zip Code</label>
                    <input type="text" name="zip"  @keyup="${this.change}">
                </div>
                <div class="form-group button ">   
                    <button  @click="${this.addContact}">Add</button>
                </div>
            </form>       
    </section>`

    }
}
           
customElements.define('form-popup',FormPopup);