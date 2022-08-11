import "./scss/app.scss";
import { LargeButton as Button } from "./ExampleComponent.stories.js";

export default {
  title: 'Examples/Page',
  args: {
    label: 'Big catchy slogan here',
    secondaryButton: {
      label: 'Custom label',
      type: "btn-secondary",
      size: 'large'
    }
  }
}

export const Page = (args) => `
  <div class="page-header">
    <h1>${args.label}</h1>
    <div class="page-header-buttons">
      ${Button(Button.args)}
      ${Button(args.secondaryButton)}
    </div>
  </div>
`;