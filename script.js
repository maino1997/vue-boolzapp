console.log('ok', Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        newMessage: "",
        filterInput: "",
        currentIndex: 2,
        user: {
            name: 'Sasha Mainardi',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
    },
    methods: {

        sentRecived(item) {
            if (item.status === 'received') {
                return 'recived';
            } else {
                return 'sent';
            }
        },

        showContact(index) {
            if (this.currentIndex === index) {
                return true;
            } else {
                return false;
            }
        },

        currentIndexUpdate(index) {
            this.currentIndex = index;

        },

        newMsgUp() {
            const newMsg = {
                date: `${new Date().getMonth()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}:${new Date().getMinutes()}`,
                text: this.newMessage,
                status: 'sent'
            }

            this.contacts[this.currentIndex].messages.push(newMsg);

            this.newMessage = "";

            setTimeout(this.autoAnswer, 2000);
        },

        autoAnswer() {
            const autoMsg = {
                date: `${new Date().getMonth()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}   ${new Date().getHours()}.${new Date().getMinutes()}`,
                text: 'ok',
                status: 'received'
            }

            this.contacts[this.currentIndex].messages.push(autoMsg);
        },

        isVisible(contact) {
            const nome = contact.name;
            const newName = nome.toLowerCase();

            console.log(newName);

            if (newName.includes(this.filterInput)) {
                contact.visible = true;
            } else {
                contact.visible = false;
            }

            if (contact.visible === true) {
                return true;
            } else {
                return false;
            }
        },

        changeVisible() {
        }

    }
});