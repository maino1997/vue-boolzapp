console.log('ok', Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        newMessage: "",
        filterInput: "",
        currentIndex: 0,
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
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Tutto fatto!',
                    status: 'received',
                    dropDownShow: false,
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Ciao come stai?',
                    status: 'sent',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received',
                    dropDownShow: false,
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'La Marianna va in campagna',
                    status: 'received',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Ah scusa!',
                    status: 'received',
                    dropDownShow: false,
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    dropDownShow: false,
                },
                {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    dropDownShow: false,
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
            if (!this.newMessage) {
                return;
            } else {
                const newMsg = this.nuovoMessaggio(this.newMessage, 'sent', false)
                this.contacts[this.currentIndex].messages.push(newMsg);

                this.newMessage = "";

                setTimeout(this.autoAnswer, 2000);
            }
        },

        autoAnswer() {
            const nuovo = this.nuovoMessaggio('ok', 'received', false);
            this.contacts[this.currentIndex].messages.push(nuovo);
        },


        nuovoMessaggio(text, status, show) {
            const newMsg = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text: text,
                status: status,
                dropDownShow: show,
            }
            return newMsg;
        },

        isVisible(contact) {
            const nome = contact.name;
            const newName = nome.toLowerCase();
            const inputValue = this.filterInput.toLowerCase().trim();

            console.log(newName);



            if (newName.includes(inputValue)) {
                contact.visible = true;
            } else {
                contact.visible = false;
            }

            return contact.visible;
        },



        // LOGICA PLAIN-JAVASCRIPT 
        // dropAppear(index) {
        //     const dropElement = document.querySelectorAll(".dropdown");


        //     console.log(dropElement);

        //     for (let i = 0; i < dropElement.length; i++) {
        //         const currentElement = dropElement[i];

        //         if (i === index) {
        //             if (currentElement.style.display === "none") {
        //                 currentElement.style.display = "block";
        //             } else {
        //                 currentElement.style.display = "none";
        //             }
        //         }
        //     }

        // },


        isShow(message) {
            if (message.dropDownShow) {
                return true;
            } else {
                return false;
            }
        },

        showChange(message) {
            if (message.dropDownShow === true) {
                message.dropDownShow = false;
            } else {
                message.dropDownShow = true;
            }
        },


        deleteMsg(message) {
            message.text = "Questo messaggio è stato eliminato";
        }
    }
});