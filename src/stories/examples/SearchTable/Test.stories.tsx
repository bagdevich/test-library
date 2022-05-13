import React from "react";

import SearchTable from "./SearchTable";

export default {
  component: SearchTable,
  title: "SearchTable",
};

const Template = (args) => <SearchTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
