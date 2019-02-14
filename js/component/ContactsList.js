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
            

        </style>
       
        
        <section class="contacts">
            <div class="contact">
                <h2>Contacts</h2>
                <div class="user-image"></div>
                <div class="fullname">Joe Sanos Garcia</div>
                <div class="fullname">888-88-88</div>
                <div class="state">NY</div>
                <div class="category">Family</div>
            </div>
        </section>
        `

    }
}
           
customElements.define('contacts-list',ContactsList);