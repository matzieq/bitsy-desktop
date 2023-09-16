const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
  });

  win.loadFile("bitsy/editor/index.html");
  win.maximize();
};

app.whenReady().then(() => {
  createWindow();
});
