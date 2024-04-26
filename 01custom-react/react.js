const { Children } = require("react");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "click me to visit a google ",
};

const root = document.getElementById("root");
console.log(root);
