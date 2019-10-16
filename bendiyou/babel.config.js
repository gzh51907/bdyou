/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-16 09:24:30
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  presets: [
    "@vue/app",
    {
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            libraryDirectory: "es",
            style: true
          }
        ]
      ]
    }
  ]
};
