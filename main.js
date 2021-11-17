var now = dayjs()
console.log(now.$d);

var app = new Vue({
    el: "#background_main",
    data: {
        activeChat: 0,
        newInputMsg: '',
        userWriting: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: false,
                messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: false,
                messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                        }
                ]
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: false,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
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
                date: now.$d,
                text: this.newInputMsg,
                status: 'sent'
            };
            let autoMessage =
            {
                date: now.$d,
                text: "ok..",
                status: 'received'
            };
            if (this.newInputMsg !== '') {
                this.userWriting = 1;
                this.contacts[i].messages.push(newMessage);
                this.newInputMsg = '';
                setTimeout(()=> this.userWriting = 0,1200);
                setTimeout(()=> this.contacts[i].messages.push(autoMessage),1000);

            }
        
        }
    }
})

