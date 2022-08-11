import "./scss/app.scss";

export default {
  title: 'Top-Level Section/Button',
  args: {
    label: "Button",
    size: "large",
  },
  // All control types: https://storybook.js.org/docs/html/essentials/controls#annotation
  argTypes: {
    type: {
      type: "select",
      options: ["Primary", "Secondary"],
      defaultValue: "Primary",
      description: "Button variant",
      mapping: {
        "Primary": "btn-primary",
        "Secondary": "btn-secondary",
      },
    },
  },
  decorators: [(Story) => `
    <span class="container">
      ${Story()}
    </span>
  `],
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
    docs: {
      description: {
        component: `
_Multiple paragraphs_ of Markdown can go here.

**Multiple** paragraphs of ~~Markdown~~, I said. Here's a list:

  - Item One
  - Item Two

Here's another list:

  1. One
  2. Two`,
      },
    },
  },
};

const Button = (args) => `
  <button class="${args.type}" data-size="${args.size}">${args.label}</button>
`;

export const Primary = Button.bind({});
Primary.args = {
  label: 'Button',
  type: 'Primary',
};

export const Secondary = Button.bind({});
Secondary.args = {
  label: 'Button',
  type: 'Secondary',
};

export const Large = Button.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Button.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};