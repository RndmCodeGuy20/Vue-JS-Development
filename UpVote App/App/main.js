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
      /**
       *? When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
       *` If the result is negative a is sorted before b.
       *` If the result is positive b is sorted before a.
       *` If the result is 0 no changes are done with the sort order of the two values.
       */
    },
  },
  methods: {
    upVote(submissionId) {
      const submission = this.submissions.find(
        (submissions) => submissions.id === submissionId
      );
      submission.votes++;
    },
  },

  /**
   *? The find() method returns the value of the first element that passes a test.
   *` The find() method executes a function for each array element.
   *` The find() method returns undefined if no elements are found.
   *` The find() method does not execute the function for empty elements.
   *` The find() method does not change the original array.
   */
};

Vue.createApp(upVoteApp).mount("#app");
