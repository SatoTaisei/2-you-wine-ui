import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { Header } from "./Header"

const meta = {
	title: "Components/Header",
	component: Header,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: fn(),
	},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
	args: {
		user: {
			name: "Jane Doe",
		},
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		await expect(canvas.getByText("Jane Doe")).toBeInTheDocument()
		const logoutButton = canvas.getByRole("button", { name: /Log out/i })
		await expect(logoutButton).toBeInTheDocument()
		await userEvent.click(logoutButton)
		await expect(args.onLogout).toHaveBeenCalledOnce()
	},
}

export const LoggedOut: Story = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		const loginButton = canvas.getByRole("button", { name: /Log in/i })
		await expect(loginButton).toBeInTheDocument()
		await expect(
			canvas.getByRole("button", { name: /Sign up/i }),
		).toBeInTheDocument()
		await userEvent.click(loginButton)
		await expect(args.onLogin).toHaveBeenCalledOnce()
	},
}
