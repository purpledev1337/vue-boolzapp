var now = new Date().toLocaleString('en-GB')

var app = new Vue({
    el: "#background_main",
    data: {
        activeChat: 0,
        newInputMsg: '',
        searchUserInput:'',
        userWriting: 0,
        userData: {
            name: 'Mustaches Guy',
            avatar: 'img/avatar_4.jpg'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020, 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    infoIsOpen: 0
                    },
                    {
                    date: '10/01/2020, 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    infoIsOpen: 0
                    },
                    {
                    date: '10/01/2020, 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    infoIsOpen: 0
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: false,
                messages: [
                    {
                    date: '20/03/2020, 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent',
                    infoIsOpen: 0
                    },
                    {
                    date: '20/03/2020, 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    infoIsOpen: 0
                    },
                    {
                    date: '20/03/2020, 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    infoIsOpen: 0
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: false,
                messages: [
                    {
                    date: '28/03/2020, 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received',
                    infoIsOpen: 0
                    },
                    {
                    date: '28/03/2020, 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    infoIsOpen: 0
                    },
                    {
                    date: '28/03/2020, 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received',
                    infoIsOpen: 0
                    }
                ]
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_io.jpg',
                visible: false,
                messages: [
                    {
                    date: '10/01/2020, 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    infoIsOpen: 0
                    },
                    {
                    date: '10/01/2020, 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    infoIsOpen: 0
                    }
                ]
            }
        ]
    },
    methods: {
        selectActive(index) {
            this.activeChat = index;
        },
        sendMessage(i) {
            let newMessage =
            {
                date: now,
                text: this.newInputMsg,
                status: 'sent',
                infoIsOpen: 0
            };
            let autoMessage =
            {
                date: now,
                text: "ok..",
                status: 'received',
                infoIsOpen: 0
            };
            if (this.newInputMsg !== '') {
                this.userWriting = 1;
                this.contacts[i].messages.push(newMessage);
                this.newInputMsg = '';
                setTimeout(()=> this.userWriting = 0,1500);
                setTimeout(()=> this.contacts[i].messages.push(autoMessage),1800);
            }
        },
        openMenu(i) {
            if (this.contacts[this.activeChat].messages[i].infoIsOpen === 0){
                this.contacts[this.activeChat].messages[i].infoIsOpen = 1;
            } else {
                this.contacts[this.activeChat].messages[i].infoIsOpen = 0
            }
        },
        closeMenu(i) {
            this.contacts[this.activeChat].messages[i].infoIsOpen = 0;
        },
        deleteMessage(i) {
                this.contacts[this.activeChat].messages.splice(i, 1);
                // this.contacts[this.activeChat].messages.forEach(msg => {
                //     this.contacts[this.activeChat].messages[msg].infoIsOpen = 0
                // })
        }
    }
})

