import { defineConfig } from "vite"

import solidStyledPlugin from "babel-plugin-solid-styled"
import solidPlugin from "vite-plugin-solid"
import solidMarkedPlugin from "vite-plugin-solid-marked"

export default defineConfig({
	plugins: [
		solidMarkedPlugin({
			noDynamicComponents: true,
			source: "/src/docs/markdown",
		}),
		solidPlugin({
			babel: {
				plugins: [
					[solidStyledPlugin, {}]
				],
			},
			extensions: [".md"],
			hot: false,
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
})
