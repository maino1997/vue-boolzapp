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

        // Assing classes if the message was sent or received
        sentRecived(item) {
            if (item.status === 'received') {
                return 'recived';
            } else {
                return 'sent';
            }
        },


        // If the index of the v-for cicle is equal to the variable currentIndex the conversation becomes visible 
        showContact(index) {
            if (this.currentIndex === index) {
                return true;
            } else {
                return false;
            }
        },


        // Set the currentIndex equal to the index of the v-for cicle at click 
        currentIndexUpdate(index) {
            this.currentIndex = index;

        },

        // Creates a new object message and returns it 
        nuovoMessaggio(text, status, show) {
            const newMsg = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text: text,
                status: status,
                dropDownShow: show,
            }
            return newMsg;
        },

        // Pushes in the list the new sent message 
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

        // Pushes an automatic received message in the list 
        autoAnswer() {
            const nuovo = this.nuovoMessaggio('ok', 'received', false);
            this.contacts[this.currentIndex].messages.push(nuovo);
        },


        // Filter the input value and decides if the contact is visible or not 
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



        // LOGICA PLAIN-JAVASCRIPT PER FAR APPARIRE IL DROPDOWN
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


        // If the property dropDownShow is true the menu is visible 
        isShow(message) {
            if (message.dropDownShow) {
                return true;
            } else {
                return false;
            }
        },

        // Set the dropDownShow property to true or false on the click 
        showChange(message) {
            if (message.dropDownShow === true) {
                message.dropDownShow = false;
            } else {
                message.dropDownShow = true;
            }
        },

        // Change the text in the message to tell that is was deleted 
        deleteMsg(message) {
            message.text = "Questo messaggio è stato eliminato";
        }
    }
});