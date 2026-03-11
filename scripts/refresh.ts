import { readdirSync, statSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// Ensure applets folder exists
if (!existsSync("./src/applets")) mkdirSync("./src/applets", { recursive: true });

const appletsDir = "./src/applets";
const viewFolders = readdirSync(appletsDir).filter((name) =>
  statSync(join(appletsDir, name)).isDirectory()
);

console.log("Found applets:", viewFolders);

// ── Update electrobun.config.ts ──────────────────────────────────────────────

const views = [
  `\t\t\t"bar-ui": { entrypoint: "src/bar-ui/index.ts" }`,  // main shell hardcoded
  ...viewFolders.map((name) => `\t\t\t"${name}": { entrypoint: "src/applets/${name}/index.ts" }`),
].join(",\n");

const copy = [
  `\t\t\t"dist/bar-ui/index.html": "views/bar-ui/index.html"`,
  `\t\t\t"dist/bar-ui/assets": "views/bar-ui/assets"`,
  ...viewFolders.map((name) => `\t\t\t"dist/${name}/index.html": "views/${name}/index.html"`),
  ...viewFolders.map((name) => `\t\t\t"dist/${name}/assets": "views/${name}/assets"`),
].join(",\n");

const electrobunConfig = `import type { ElectrobunConfig } from "electrobun";

export default {
\tapp: {
\t\tname: "vanilla-vite",
\t\tidentifier: "vanillavite.electrobun.dev",
\t\tversion: "0.0.1",
\t},
\tbuild: {
\t\tbun: {
\t\t\tentrypoint: "src/bun/index.ts"
\t\t},
\t\tviews: {
${views}
\t\t},
\t\tcopy: {
${copy}
\t\t},
\t\tmac: { bundleCEF: false },
\t\tlinux: { bundleCEF: false },
\t\twin: { bundleCEF: false },
\t},
} satisfies ElectrobunConfig;
`;

writeFileSync("electrobun.config.ts", electrobunConfig);
console.log("✓ electrobun.config.ts updated");

// ── Update vite.config.ts ────────────────────────────────────────────────────
// Vite can only have one root, so we build each view separately.
// We generate a vite.config.ts that accepts a --view flag.

const viteConfig = `import { defineConfig } from "vite";

const view = process.env.VITE_VIEW ?? "bar-ui";
const isApplet = process.env.VITE_APPLET === "true";
const root = isApplet ? \`src/applets/\${view}\` : \`src/\${view}\`;

export default defineConfig({
\troot,
\tbase: "./",
\tbuild: {
\t\toutDir: \`../../dist/\${view}\`,
\t\temptyOutDir: true,
\t},
\tserver: {
\t\tport: 5173,
\t\tstrictPort: true,
\t},
});
`;


writeFileSync("vite.config.ts", viteConfig);
console.log("✓ vite.config.ts updated");
