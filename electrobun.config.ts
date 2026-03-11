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
		views: {
			"bar-ui": { entrypoint: "src/bar-ui/index.ts" },
			"keybinds-helper": { entrypoint: "src/applets/keybinds-helper/index.ts" },
		},
		copy: {
			"dist/bar-ui/index.html": "views/bar-ui/index.html",
			"dist/bar-ui/assets": "views/bar-ui/assets",
			"dist/keybinds-helper/index.html": "views/keybinds-helper/index.html",
			"dist/keybinds-helper/assets": "views/keybinds-helper/assets",
		},
		mac: { bundleCEF: false },
		linux: { bundleCEF: false },
		win: { bundleCEF: false },
	},
} satisfies ElectrobunConfig;
