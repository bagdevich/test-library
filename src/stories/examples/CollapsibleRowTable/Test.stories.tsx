import React from "react";

import CollapsibleRowTable from "./CollapsibleRowTable";

export default {
  component: CollapsibleRowTable,
  title: "CollapsibleRowTable",
};

const Template = (args) => <CollapsibleRowTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
