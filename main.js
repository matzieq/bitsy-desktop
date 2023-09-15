const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
  });

  win.loadFile("editor/index.html");
};

app.whenReady().then(() => {
  createWindow();
});