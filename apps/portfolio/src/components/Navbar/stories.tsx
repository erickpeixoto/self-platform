import { Meta, Story } from "@storybook/react";
import React from "react";

import Navbar from ".";

export default {
  title: "Portfolio/Components/Navbar",
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
