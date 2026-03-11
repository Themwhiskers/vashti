import { BrowserWindow } from "electrobun/bun";

const isDev = process.env.NODE_ENV === "development";

const win = new BrowserWindow({
  title: "Vashti",
  url: isDev ? "http://localhost:5173" : "views://bar-ui/index.html",
});
