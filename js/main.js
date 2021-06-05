Vue.component("tab-home", {
    template: `
        <div>
            <div>
                <h1>Bem-Vindo</h1>
                <p>Olá, esta é minha página pessoal.</p>
                <p>Co-Fundador da <a href="codetta.tech" target=_blank>Codetta Tech</a></p>
            </div>
            <div class="my-5">
                <h1>Experiências</h1>
                <ul>
                    <li>{{ cargos[0] }} e {{ cargos[1] }} da {{ empresa }}.</li>
                </ul>
            </div>
            <div class="my-5">
                <h1>Formação Acadêmica</h1>
                <ul>
                    <li v-for='academico in academicos'>Cursando {{ academico }}</li>
                </ul>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h1>Hard-Skills</h1>
                    <ul>
                        <li v-for='hard in hards'>{{ hard }}</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h1>Soft-Skills</h1>
                    <ul>
                        <li v-for='soft in softs'>{{ soft }}</li>
                    </ul>
                </div>
            </div>
        </div>`,
        data: function() {
            return {
                cargos: ['Desenvolvedor de Sistemas', 'co-CEO'],
                empresa: "Codetta Tech",
                academicos: ['Engenharia de Computação pela Universidade Estadual de Feira de Santana(UEFS)',
                'Técnico em Desenvolvimento de Sistemas pelo SENAI-BA'],
                hards: ['JavaScript', 'HTML', 'CSS', 'Java', 'Jekyll', 'Hugo', 'Vue'],
                softs: ['Trabalho em Equipe', 'Capacidade adaptativa', 'Resiliência', 'Comunicação', 'Ética', 'Pensamento Crítico', 'Atitude Positiva']
            }
        }
});

Vue.component("tab-sobre", {
    template: `
        <div class="row">
            <div class="col-md-8">
                <h1>Sobre</h1>
                <p> O meu nome é {{ nome }}, tenho {{ idade }} anos de idade, solteiro, 
                nasci e ainda moro na cidade de {{ cidade }} na {{ estado }}. 
                Sou estudante de {{ cursos[0] }} e de {{ cursos[1] }}.<br>
                Também fundei em 2021, junto com um amigo, a 
                <a href="https://codetta.tech" target=_blank>Codetta Tech</a>, 
                uma Software House com o objetivo de proporcionar soluções digitais para 
                as mais diversas necessidades pessoais e empresariais. Além de co-CEO, 
                atuo como Desenvolvedor na empresa.</p>
            </div>
            <div class="col-md-4">
                <img class="rounded-circle" :src="img" :width=width>
            </div>
        </div>`,
    data: function() {
        return {
            nome: "João Pedro Rios Carvalho",
            idade: 20,
            cidade: "Feira de Santana",
            estado: "Bahia",
            cursos: ['Engenharia de Computação pela Universidade Estadual de Feira de Santana(UEFS)',
                    'Técnico em Desenvolvimento de Sistemas pelo SENAI-BA'],
            img: "img/joao.png",
            width: 400
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
    computed: {
        currentTabComponent() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
});