/* eslint-disable prettier/prettier */
const path = require("path");

module.exports = {
  icons: [
    {
      id: "mdc",
      name: "Material Design Community icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "MaterialDesign-SVG/svg/*.svg"
          ),
          formatter: name => `${name}`
        }
      ],
      projectUrl: "https://github.com/templarian/MaterialDesign",
      license: "Apache License Version 2.0",
      licenseUrl:
        "https://github.com/Templarian/MaterialDesign/blob/master/LICENSE"
    },
    {
      id: "aiFill",
      name: "Ant Design Fill Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "ant-design-icons/packages/icons-svg/svg/filled/*.svg"
          ),
          formatter: name => `${name}`
        },
      ],
      projectUrl: "https://github.com/ant-design/ant-design-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "aiOutline",
      name: "Ant Design Outline Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "ant-design-icons/packages/icons-svg/svg/outlined/*.svg"
          ),
          formatter: name => `${name}`
        },
      ],
      projectUrl: "https://github.com/ant-design/ant-design-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "aiTwotone",
      name: "Ant Design Twotone Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "ant-design-icons/packages/icons-svg/svg/twotone/*.svg"
          ),
          multiColor: true,
          formatter: name => `${name}`
        }
      ],
      projectUrl: "https://github.com/ant-design/ant-design-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
  ]
};
