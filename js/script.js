const { createApp } = Vue

  createApp({
    data() {
        
      return {

        contacts: listContacts,
        activeIndex : 0,

      }
    },

    methods: {
      changeActiveIndex(index) {
        this.activeIndex = index;
      },

      changeDate (fullDate) {
        const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
        return luxonDate.toFormat("HH:mm");
      },

    }


  }).mount('#app')
