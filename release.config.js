module.exports = {
  verifyConditions: ["semantic-release-chrome", "@semantic-release/github"],
  branch: 'semantic-release-chrome-test',
  prepare: [
    {
      path: "semantic-release-chrome",
      asset: "playground.zip"
    }
  ],
  publish: [
    {
      path: "semantic-release-chrome",
      asset: "playground.zip",
      extensionId: "almjngcniaaecgaaanfjpiieeaoimiif"
    },
    {
      path: "@semantic-release/github",
      assets: [
        {
          path: "playground.zip"
        }
      ]
    }
  ]
};
