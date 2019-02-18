import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import SideMenu from '/js/component/SideMenu.js'
import ContentArea from '/js/component/ContentArea.js'
import ContactsList from '/js/component/ContactsList.js'
class CounterComp extends LitElement {
    constructor(){
        super();
      
        this.addContactClick=this.addContactClick.bind(this);
        this.saveContact=this.saveContact.bind(this);
        this.allContacts=['Anu']
        

    }

    static get properties(){
        return {
            addContactClick: Function,
            allContacts: Array
            
        }
    };

    firstUpdated() {
       
    }

    addContactClick() {
        alert("add button clicked");
        return true;
    }

    saveContact(contact){

    }
                             
    render(){
        let self=this;

        return html`
        <style>
        @import 'css/global.css';
            .main-page{
                display: grid;
                grid-template-columns: 250px 1fr;
            }

        </style>
        <div class="main-page">
            <side-menu popupOpen="${this.popupOpen}"  allContact="${this.allContact}"></side-menu>
            <content-area popupOpen="${this.popupOpen}" ></content-area>
        
    </div>

        `

    }
}
           
customElements.define('counter-comp',CounterComp);