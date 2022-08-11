import "./scss/app.scss";

export default {
  title: '',
  args: {
  },
  decorators: [(Story) => `
    ${Story()}
  `],
};

export const BlankTemplate = (args) => `

`;