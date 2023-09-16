const { app, BrowserWindow, MenuItem, Menu } = require("electron");
/**
 * @type {MenuItem[]}
 */
const tpl = [
  {
    label: "Bitsy",
    submenu: [{ role: "about" }, { type: "separator" }, { role: "quit" }],
  },
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
