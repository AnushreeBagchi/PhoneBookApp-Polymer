import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
export default class SideMenu extends LitElement {
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
       
        <section id="side-menu">
            <div class="logo"></div>
            <div class="menu">
                <div class="title">Contacts</div>
                <nav>
                    <a href="#">Add Contacts</a>
                    <a href="#">Add Contacts</a>

                    <a href="#">Add Contacts</a>
                    <a href="#">Add Contacts</a>
                </nav>
            </div>
        </section>
      

        `

    }
}
           
customElements.define('side-menu',SideMenu);