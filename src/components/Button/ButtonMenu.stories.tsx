import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LibButton, { ButtonStyle } from "./ButtonMenu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@zaveit/components/ButtonMenu",
  component: LibButton,

  argTypes: {
    styleClass: {
      options: [
        "activeGreen",
        "borderedGreen",
        "transparentButton",
        "transparentGreenText",
        "transparentGreyBorderBtn",
        "activeGrey",
        "backButton",
        "greyBtn",
        "redButton",
        "transparentBtn",
        "rootBtn",
        "active",
      ],

      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof LibButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LibButton> = (args) => (
  <LibButton {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Button = Template.bind({});

Button.args = {
  children: ["ddd", <LibButton.Item>ddd</LibButton.Item>],
  backgroundColor: "green",
  styleClass: "active",
  loading: false,
  backButton: false,
};

Button.parameters = {
  docs: {
    source: {
      state: "open",
      type: "dynamic",
      // code: "<LibButton>ddd <LibButton.Item>ddd</LibButton.Item></LibButton>",
    },
  },
};
