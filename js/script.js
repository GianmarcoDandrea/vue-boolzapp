const { createApp } = Vue

  createApp({
    data() {
        
      return {

        contacts: listContacts,
        
        activeIndex : 0,

      }
    },

    methods: {
      showChat() {
        
      }
    }


  }).mount('#app')
