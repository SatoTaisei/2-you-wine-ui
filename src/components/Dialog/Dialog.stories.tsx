import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"
import { Button } from "@/components/Button"
import { Dialog } from "./Dialog"

const meta = {
	title: "Components/Dialog",
	component: Dialog.Root,
	parameters: {
		layout: "fullscreen",
		docs: {
			story: { iframeHeight: 400 },
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Dialog.Root>

export default meta
type Story = StoryObj<typeof meta>

const Center = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "200px",
		}}
	>
		{children}
	</div>
)

export const Default: Story = {
	render: () => (
		<Center>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button label="Open Dialog" primary />
				</Dialog.Trigger>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Title>Dialog Title</Dialog.Title>
						<Dialog.Description>
							This is a description of the dialog content.
						</Dialog.Description>
						<Dialog.CloseTrigger>✕</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Root>
		</Center>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const trigger = canvas.getByRole("button", { name: /open dialog/i })
		await expect(trigger).toBeInTheDocument()
		await userEvent.click(trigger)
		await expect(
			canvas.getByRole("dialog", { name: /dialog title/i }),
		).toBeInTheDocument()
	},
}

export const AlertDialog: Story = {
	render: () => (
		<Center>
			<Dialog.Root role="alertdialog" closeOnInteractOutside={false}>
				<Dialog.Trigger asChild>
					<Button label="Delete Item" />
				</Dialog.Trigger>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Title>Are you sure?</Dialog.Title>
						<Dialog.Description>
							This action cannot be undone. The item will be permanently
							deleted.
						</Dialog.Description>
						<div
							style={{
								display: "flex",
								gap: "8px",
								justifyContent: "flex-end",
							}}
						>
							<Dialog.CloseTrigger
								style={{
									position: "static",
									width: "auto",
									height: "auto",
									padding: "8px 16px",
									border: "1px solid #ccc",
									borderRadius: "6px",
									cursor: "pointer",
									background: "white",
								}}
							>
								Cancel
							</Dialog.CloseTrigger>
							<Dialog.CloseTrigger
								style={{
									position: "static",
									width: "auto",
									height: "auto",
									padding: "8px 16px",
									backgroundColor: "#dc2626",
									color: "white",
									border: "none",
									borderRadius: "6px",
									cursor: "pointer",
								}}
							>
								Delete
							</Dialog.CloseTrigger>
						</div>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Root>
		</Center>
	),
}

export const LazyMount: Story = {
	render: () => (
		<Center>
			<Dialog.Root lazyMount unmountOnExit>
				<Dialog.Trigger asChild>
					<Button label="Open (Lazy)" />
				</Dialog.Trigger>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Title>Lazy Mounted Dialog</Dialog.Title>
						<Dialog.Description>
							This dialog content is only mounted in the DOM when opened.
						</Dialog.Description>
						<Dialog.CloseTrigger>✕</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Root>
		</Center>
	),
}
