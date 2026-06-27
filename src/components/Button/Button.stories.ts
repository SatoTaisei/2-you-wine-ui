import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { Button } from "./Button"

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		primary: true,
		label: "Button",
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole("button", { name: /button/i })

		await expect(button).toBeInTheDocument()
		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalledOnce()
	},
}

export const Secondary: Story = {
	args: {
		label: "Button",
	},
}

export const Large: Story = {
	args: {
		size: "large",
		label: "Button",
	},
}

export const Small: Story = {
	args: {
		size: "small",
		label: "Button",
	},
}
