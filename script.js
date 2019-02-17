import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import SideMenu from '/js/component/SideMenu.js'
import ContentArea from '/js/component/ContentArea.js'
import ContactsList from '/js/component/ContactsList.js'
class CounterComp extends LitElement {
    constructor(){
        super();
       
        this.addContactClick=this.addContactClick.bind(this);
        this.test=false;
    }

    static get properties(){
        return {
            addContactClick: Function,
        }
    };

    firstUpdated() {
       
    }

    addContactClick(){
        debugger;
        console.log("add button clicked");
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
            <side-menu addContactClick="${this.addContactClick}"></side-menu>
            <content-area test="${this.test}"></content-area>
        
    </div>

        `

    }
}
           
customElements.define('counter-comp',CounterComp);