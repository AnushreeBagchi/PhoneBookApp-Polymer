import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
export default class ContentArea extends LitElement {
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
            

        </style>
       
        <section id="content-area">
        <contacts-list><contacts-list>
    </section>
      

        `

    }
}
           
customElements.define('content-area',ContentArea);