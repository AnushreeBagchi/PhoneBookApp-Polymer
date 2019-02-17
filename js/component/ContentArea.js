import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import ContactsList from '/js/component/ContactsList.js'
import FavoritesList from '/js/component/FavoritesList.js'
import FormPopup from '/js/component/FormPopup.js'


export default class ContentArea extends LitElement {
    constructor(){
        super();
        
    }

    static get properties(){
        return {
           test: Boolean
        }
    };

    firstUpdated() {
  
    }
                                    
    render(){
        let self=this;
        
        return html`
        <style>
            @import 'css/global.css';
            #content-area{
                background: #fcfdff;
                padding: 50px 80px;
            }    

        </style>
        <div>${this.test}</div>
        <section id="content-area">
        <form-popup></form-popup>
        <favorites-list></favorites-list>
        <contacts-list><contacts-list>
    </section>
      

    `

    }
}
           
customElements.define('content-area',ContentArea);