import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ZTable, { TableProps } from "./Table";
import {
  fieldExtractor,
  headCells,
  mockData,
} from "../../examples/Table/table.config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@zaveit/components/Table",
  component: ZTable,
} as ComponentMeta<typeof ZTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ZTable> = (args) => <ZTable {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Table = Template.bind({});

const args: TableProps = {
  headConfig: headCells,
  data: mockData,
  keyField: "id",
  fieldExtractor: fieldExtractor,
};

Table.args = args;
