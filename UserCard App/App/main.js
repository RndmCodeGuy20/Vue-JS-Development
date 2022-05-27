const cards = [
  {
    id: 1,
    name: "Shantanu Mane",
    userName: "@RndmCodeGuy",
    post: "../Public/images/userEntry.jpg",
    userImg: "../Public/images/firstuser.jpg",
    bio: "It's classified. I'd tell you, but then I'd have to kill you.",
    Time: "11:04 AM",
    Date: "20 Mar 2020",
    tags: ["#topgun", "#maverick"],
  },
  {
    id: 2,
    name: "Shantanu Mane",
    userName: "@RndmCodeGuy",
    post: "../Public/images/userEntry2.jpg",
    userImg: "../Public/images/seconduser.jpg",
    bio: "It's classified. I'd tell you, but then I'd have to kill you.",
    Time: "11:04 AM",
    Date: "20 Mar 2020",
    tags: ["#topgun", "#maverick"],
  },
];

const userCardApp = {
  data() {
    return {
      cards: cards,
    };
  },

  methods: {
    addCard() {},
  },
};

Vue.createApp(userCardApp).mount("#app");
