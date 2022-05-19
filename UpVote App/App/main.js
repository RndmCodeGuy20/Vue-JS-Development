const upVoteApp = {
  data() {
    return {
      submissions: submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
};

Vue.createApp(upVoteApp).mount("#app");
