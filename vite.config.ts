/// <reference types="vitest/config" />

// https://vite.dev/config/
import path from "node:path"
import { fileURLToPath } from "node:url"
import babel from "@rolldown/plugin-babel"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { defineConfig } from "vite"

const dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	resolve: {
		alias: {
			"styled-system": path.resolve(dirname, "./styled-system"),
		},
	},
	plugins: [
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
	],
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, ".storybook"),
						storybookScript: "pnpm sb --no-open",
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: "chromium",
							},
						],
					},
				},
			},
		],
	},
})
