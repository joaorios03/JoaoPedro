Vue.component("tab-home", {
    template: `
        <div>
            <h1> Seja Bem-Vindo</h1>
        </div>`,
});

Vue.component("tab-sobre", {
    template: `
        <div>
            <h1>Sobre</h1>
            <p> Me chamo {{ nome }}, tenho {{ idade }} anos de idade.</p>
        </div>`,
    data: function() {
        return {
            nome: "João Pedro Rios Carvalho",
            idade: 20
        }
    }
});

Vue.component("tab-contato", {
    template: `
        <div>
            <h1>Contato</h1>
            <ul>
                <li>
                    <p>Telefone: <a href="tel:+5575992370004" target=_blank> {{ tel }} </a></p>
                </li>
                <li>
                    <p>GitHub: <a href="https://github.com/joaorios03" target=_blank> {{ git }} </a></p>
                </li>
                <li>
                    <p>Instagram: <a href="https://www.instagram.com/joaorios03/" target=_blank> {{ instagram }} </a></p>
                </li>
                <li>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/joao-pedro-a521931a6/" target=_blank> {{ linkedin }} </a></p>
                </li>
                <li>
                    <p>Email: <a href="mailto:jprcarvalho1@gmail.com" target=_blank> {{ email }} </a></p>
                </li>
            </ul>
        </div>`,
    data: function() {
        return {
            tel: "(75) 99237-0004",
            git: "joaorios03",
            instagram: "joaorios03",
            linkedin: "joao pedro",
            email: "jprcarvalho1@gmail.com"
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        currentTab: "Home",
        tabs: ["Home", "Sobre", "Contato"]
    },
    methods: {
        showAbout: function () {
        }
    },
    computed: {
        currentTabComponent() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
});