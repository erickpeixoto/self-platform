import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import Footer from ".";

export default {
  title: "Portfolio/Components/Footer",
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
