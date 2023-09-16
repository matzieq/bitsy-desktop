module.exports = {
  packagerConfig: {
    asar: true,
    icon: "bitsy/editor/icons/bitsy",
    // ignore: path => path.includes("docs") && !path.includes("editor"),
    ignore: [
      "bitsy/docs",
      "bitsy/classic",
      "bitsy/dev",
      "bitsy/experiments",
      ".vscode",
      ".github",
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
