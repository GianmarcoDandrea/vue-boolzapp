const { createApp } = Vue

const dt = luxon.DateTime

createApp({
  data() {

    return {

      contacts: listContacts,
      activeIndex: 0,
      searchInputText: '',
      textNewMessage: '',

    }
  },

  methods: {
    //funzione per cambiare index 
    changeActiveIndex(index) {
      this.activeIndex = index;
    },

    changeDate(fullDate) {
      const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
      return luxonDate.toFormat("HH:mm");
    },

    newMessage() {

      const now = dt.now().toString();

      const newMessage = {
        date: dt.fromISO(now).toFormat('dd/MM/yyyy HH:mm:ss'),
        message: this.textNewMessage,
        status: 'sent'
      }

      this.textNewMessage = '';

      this.contacts[this.activeIndex].messages.push(newMessage);
      this.receiveAnswer(this.activeIndex);
    },

    receiveAnswer() {
      
      const now = dt.now().toString();
      const replyIndex = this.activeIndex;
      setTimeout(() => {
        const newAnswer = {
          date: dt.fromISO(now).toFormat('dd/MM/yyyy HH:mm:ss'),
          message: 'Ok!',
          status: 'received'
        }
  
        this.contacts[replyIndex].messages.push(newAnswer);
        
      }, 1000);
    },

    searchContact() {
      console.log("ricerca", this.searchInputText);
      let search = this.searchInputText.toLowerCase();
      this.contacts.forEach(element => {
        if (element.name.toLowerCase().includes(search)) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    },

    deleteMessage(index) {

      this.contacts[this.activeIndex].messages.splice(index, 1);

    },

    substringLastMsg(message) {

      let preview;

      if (message.length > 30) {
        preview = message.substr(0, 30) + '...';
      } else {
        preview = message;
      }

      return preview;
    }


  }

}).mount('#app')
