import { defineConfig } from "vite";

const view = process.env.VITE_VIEW ?? "bar-ui";
const isApplet = process.env.VITE_APPLET === "true";
const root = isApplet ? `src/applets/${view}` : `src/${view}`;

export default defineConfig({
	root,
	base: "./",
	build: {
		outDir: `../../dist/${view}`,
		emptyOutDir: true,
	},
	server: {
		port: 5173,
		strictPort: true,
	},
});
