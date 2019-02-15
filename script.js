import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import SideMenu from '/js/component/SideMenu.js'
import ContentArea from '/js/component/ContentArea.js'
import ContactsList from '/js/component/ContactsList.js'
class CounterComp extends LitElement {
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
            .main-page{
                display: grid;
                grid-template-columns: 250px 1fr;
            }

        </style>
        <div class="main-page">
            <side-menu></side-menu>
            <content-area></content-area>
        
    </div>

        `

    }
}
           
customElements.define('counter-comp',CounterComp);