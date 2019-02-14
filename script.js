import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
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
            

        </style>
        <div class="main-page">
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
        <section id="content-area">
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
        </section>
    </div>

        `

    }
}
           
customElements.define('counter-comp',CounterComp);