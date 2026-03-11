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
				entrypoint: "src/main-ui/index.ts"
			},
		},
		copy: {
			"dist/index.html": "views/main-ui/index.html",
    		"dist/assets": "views/main-ui/assets", 
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
