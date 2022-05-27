const submissionComponent = {
  template: `<div style="display:flex; width:100%">
          <figure class="media-left">
            <img
              class="image is-64x64"
              v-bind:src="submission.submissionImage"
            />
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  <a href="#" class="has-text-info">{{submission.title}}</a>
                  <span class="tag is-small">{{submission.tags}}</span>
                </strong>
                <br />
                {{submission.description}}
                <br />
                <small class="is-size-7">
                  Submitted by:
                  <img
                    class="image is-24x24"
                    v-bind:src="submission.avatar"
                    v-bind:class="{ 'red-border': submission.votes >= 25 }"
                  />
                </small>
              </p>
            </div>
          </div>
          <div class="media-right">
            <span class="icon is-small" v-on:click="upVote(submission.id)">
              <i class="fa fa-chevron-up"></i>
              <strong class="has-text-info">{{submission.votes}}</strong>
            </span>
          </div>
          </div>`,

  props: ["submission", "submissions"],
  methods: {
    upVote(submissionId) {
      const submission = this.submissions.find(
        (submissions) => submissions.id === submissionId
      );
      submission.votes++;
    },
  },
};

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

  /**
   *? The find() method returns the value of the first element that passes a test.
   *` The find() method executes a function for each array element.
   *` The find() method returns undefined if no elements are found.
   *` The find() method does not execute the function for empty elements.
   *` The find() method does not change the original array.
   */

  components: {
    "submission-component": submissionComponent,
  },
};

Vue.createApp(upVoteApp).mount("#app");
