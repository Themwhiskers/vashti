import type { ElectrobunConfig } from "electrobun";

export default {
	root: "src/bar-ui",
	base: "./",
	app: {
		name: "vanilla-vite",
		identifier: "vanillavite.electrobun.dev",
		version: "0.0.1",
	},
	build: {
		outDir: "../../dist",
		emptyOutDir: true,
		bun: {
			entrypoint: "src/bun/index.ts"
		},
		views : {
			"bar-ui": {
				entrypoint: "src/bar-ui/index.ts"
			},
		},
		copy: {
			"dist/index.html": "views/bar-ui/index.html",
    		"dist/assets": "views/bar-ui/assets", 
		},
		mac: {
			bundleCEF: false,
		},
		linux: {
			bundleCEF: false,
		},
		win: {
			bundleCEF: false,
		},
	},
} satisfies ElectrobunConfig;
