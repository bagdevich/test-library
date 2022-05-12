import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LibButton from "./ExampleButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@zaveit/components/ExampleButton",
  component: LibButton,
  args: {
    children: "My Component",
  },
} as ComponentMeta<typeof LibButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LibButton> = (args) => (
  <LibButton {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Button = Template.bind({});

Button.args = {
  children: "primary",
  color: "green",
};

Button.parameters = {
  docs: { source: { state: "open" } },
};
