import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TextInput from "./TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The TextInput's value",
    },
    disabled: {
      control: "boolean",
      description: "Is the TextInput disabled?",
    },
    onChange: {
      description: "Called when the input's onChange event triggered",
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    value: 'Enabled',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled',
    disabled: true,
  },
};
