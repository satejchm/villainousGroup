new Vue({
  el: ".villains-wrapper",
  mounted: function() {
    axios.get("data/data.json").then(response => {
      this.Villains = response.data.Villains;
    }),
      axios.get("data/data.json").then(response => {
        this.FAQ = response.data.FAQ;
      });
  },

  data: {
    Villains: [],
    message: "message",
    FAQ: []
  },

  methods: {}
});
