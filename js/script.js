const { createApp } = Vue

const dt = luxon.DateTime

  createApp({
    data() {
        
      return {

        contacts: listContacts,
        activeIndex : 0,

      }
    },

    methods: {
      //funzione per cambiare index 
      changeActiveIndex(index) {
        this.activeIndex = index;
      },

      changeDate (fullDate) {
        const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
        return luxonDate.toFormat("HH:mm");
      },

      newMessage(){
           
        const now = dt.now().toString();
   
        const newMessage = {
            date: dt.fromISO(now).toFormat('dd/MM/yyyy HH:mm:ss'),
            message: this.textNewMessage,
            status: 'sent'
        }

        this.textNewMessage = '';

        this.contacts[this.activeIndex].messages.push(newMessage);
        setTimeout(this.receiveAnswer, 1000);
      },

      receiveAnswer(){
        const now = dt.now().toString();
    
        const newAnswer = {
            date: dt.fromISO(now).toFormat('dd/MM/yyyy HH:mm:ss'),
            message: 'Ok!',
            status: 'received'
        }

        this.contacts[this.activeIndex].messages.push(newAnswer);
      },

      searchContact(){
            
      },

      deleteMessage(index) {

        this.contacts[this.activeIndex].messages.splice(index,1);

    },


    }  

  }).mount('#app')
