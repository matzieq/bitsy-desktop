const { app, BrowserWindow, MenuItem, Menu } = require("electron");

const isMac = process.platform === 'darwin'

/**
 * @type {MenuItem[]}
 */
const tpl = [
  ...(isMac ? [{
    label: "Bitsy",
    submenu: [{ role: "about" }, { type: "separator" }, { role: "quit" }],
  }] : []),
];

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

  const menu = Menu.buildFromTemplate(tpl);
  Menu.setApplicationMenu(menu);

});
