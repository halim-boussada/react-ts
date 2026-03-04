import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "big",
    label: "username",
    placeholder: "Enter text",
    type: "text",
    className: "primary big-size",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    size: "medium",
    label: "username",
    placeholder: "Enter text",
    type: "text",
    className: "secondary medium-size",
  },
};
