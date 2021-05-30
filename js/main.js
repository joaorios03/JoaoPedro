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
                    <p>Telefone: <a> {{ tel }} </a></p>
                </li>
                <li>
                    <p>GitHub: <a> {{ git }} </a></p>
                </li>
                <li>
                    <p>Instagram: <a> {{ instagram }} </a></p>
                </li>
                <li>
                    <p>LinkedIn: <a> {{ linkedin }} </a></p>
                </li>
                <li>
                    <p>Email: <a> {{ email }} </a></p>
                </li>
            </ul>
        </div>`,
    data: function() {
        return {
            tel: "(75) 99237-0004",
            git: "joaorios03",
            instagram: "joaorios03",
            linkedin: "...",
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