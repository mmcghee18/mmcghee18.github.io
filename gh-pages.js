const ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "master",
    repo: "https://github.com/mmcghee18/mmcghee18.github.io", // Update to point to your repository
    // user: {
    //     name: 'Michelle', // update to use your name
    //     email: 'Your Email address' // Update to use your email
    // }
  },
  () => {
    console.log("Deploy complete! 🚀");
  }
);
