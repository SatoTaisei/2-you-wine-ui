import { defineConfig } from "@pandacss/dev"
import { dialogRecipe } from "./src/components/Dialog/dialog.recipe"

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	jsxFramework: "react",
	theme: {
		extend: {
			slotRecipes: {
				dialog: dialogRecipe,
			},
		},
	},
	outdir: "styled-system",
})
