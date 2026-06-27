import { cva } from "styled-system/css"

export interface ButtonProps {
	primary?: boolean
	backgroundColor?: string
	size?: "small" | "medium" | "large"
	label: string
	onClick?: () => void
}

const button = cva({
	base: {
		display: "inline-block",
		cursor: "pointer",
		border: "0",
		borderRadius: "3em",
		fontWeight: "700",
		lineHeight: "1",
		fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
	},
	variants: {
		variant: {
			primary: {
				backgroundColor: "#555ab9",
				color: "white",
			},
			secondary: {
				boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
				backgroundColor: "transparent",
				color: "#333",
			},
		},
		size: {
			small: {
				padding: "10px 16px",
				fontSize: "12px",
			},
			medium: {
				padding: "11px 20px",
				fontSize: "14px",
			},
			large: {
				padding: "12px 24px",
				fontSize: "16px",
			},
		},
	},
	defaultVariants: {
		variant: "secondary",
		size: "medium",
	},
})

export const Button = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	return (
		<button
			type="button"
			className={button({ variant: primary ? "primary" : "secondary", size })}
			style={backgroundColor ? { backgroundColor } : undefined}
			{...props}
		>
			{label}
		</button>
	)
}
