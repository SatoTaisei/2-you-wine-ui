import { dialogAnatomy } from "@ark-ui/react/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"

export const dialogRecipe = defineSlotRecipe({
	className: "dialog",
	slots: dialogAnatomy.keys(),
	base: {
		backdrop: {
			position: "fixed",
			inset: "0",
			zIndex: "calc(1000 + var(--layer-index, 0))",
			backgroundColor: "rgba(0, 0, 0, 0.4)",
		},
		positioner: {
			position: "fixed",
			inset: "0",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: "calc(1001 + var(--layer-index, 0))",
		},
		content: {
			position: "relative",
			backgroundColor: "white",
			borderRadius: "12px",
			padding: "24px",
			width: "90vw",
			maxWidth: "480px",
			boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
		},
		title: {
			fontSize: "18px",
			fontWeight: "600",
			lineHeight: "1.4",
			marginBottom: "8px",
		},
		description: {
			fontSize: "14px",
			lineHeight: "1.6",
			color: "rgba(0, 0, 0, 0.6)",
			marginBottom: "16px",
		},
		closeTrigger: {
			position: "absolute",
			top: "16px",
			right: "16px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "32px",
			height: "32px",
			cursor: "pointer",
			border: "none",
			background: "none",
			borderRadius: "6px",
			_hover: {
				backgroundColor: "rgba(0, 0, 0, 0.06)",
			},
		},
	},
})
