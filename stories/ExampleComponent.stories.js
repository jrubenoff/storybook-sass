import "./scss/app.scss";

export default {
  title: 'Examples/Component',
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

export const PrimaryButton = Button.bind({});
PrimaryButton.args = {
  label: 'Button',
  type: 'Primary',
};

export const SecondaryButton = Button.bind({});
SecondaryButton.args = {
  label: 'Button',
  type: 'Secondary',
};

export const LargeButton = Button.bind({});
LargeButton.args = {
  size: 'large',
  label: 'Button',
};

export const SmallButton = Button.bind({});
SmallButton.args = {
  size: 'small',
  label: 'Button',
};