import type { ElectrobunConfig } from "electrobun";

export default {
	app: {
		name: "vanilla-vite",
		identifier: "vanillavite.electrobun.dev",
		version: "0.0.1",
	},
	build: {
		bun: {
			entrypoint: "src/bun/index.ts"
		},
		views : {
			"main-ui": {
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
