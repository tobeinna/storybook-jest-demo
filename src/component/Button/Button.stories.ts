import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      description: "Define the button's type",
    },
    text: {
      control: "text",
      description: "Define the button's displayed label",
    },
    disabled: {
      control: "boolean",
      description: "Is the button disabled?",
    },
    onClick: {
      description: "Called when the button's onClick event triggered",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    text: "Primary Button",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    text: "Secondary Button",
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    text: "Danger Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    type: "primary",
    text: "Disabled Primary Button",
    disabled: true,
  },
};
