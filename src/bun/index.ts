import { BrowserWindow, createRPC } from "electrobun/bun";

const isDev = process.env.NODE_ENV === "development";

const win = new BrowserWindow({
  title: "Vashti",
  url: isDev ? "http://localhost:5173" : "views://bar-ui/index.html",
  rpc: createRPC({
    openMyApplet: () => {
      new BrowserWindow({
        title:"Keybinds Helper",
        url: "views://keybinds-helper/index.html",
      })
    }
  }),
});
