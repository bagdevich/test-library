import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ZaveitSearch, { SearchProps } from "../components/Search/Search";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@zaveit/components/Search",
  component: ZaveitSearch,
} as ComponentMeta<typeof ZaveitSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ZaveitSearch> = (args) => (
  <ZaveitSearch {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Search = Template.bind({});

const args: SearchProps = {
  onChange: (val) => alert(val),
  value: "",
};

Search.args = args;
