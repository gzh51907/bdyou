/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 10:39:04
 * @LastEditTime: 2019-10-14 10:57:20
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
        }
    }
}