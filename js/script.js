const { createApp } = Vue

  createApp({
    data() {
        
      return {

        contacts: listContacts,
        
        path: null

      }
    },

    methods: {
        searchImg(i , j) {
            path: listContacts[i].message[j].date

    
        }
    }


  }).mount('#app')
