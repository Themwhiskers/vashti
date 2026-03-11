import { Electroview, createRPC } from "electrobun/view";

const electrobun = new Electroview({ rpc: createRPC({}) });

window.loadPage = () => {
  const newUrl = document.querySelector("#urlInput").value;
  const webview = document.querySelector(".webview");
  webview.src = newUrl;
};

window.goBack = () => {
  const webview = document.querySelector(".webview");
  webview.goBack();
};

window.goForward = () => {
  const webview = document.querySelector(".webview");
  webview.goForward();
};

// This is what was missing:
document.querySelector("#myBtn").addEventListener("click", () => {
  electrobun.rpc.openMyApplet();
});
