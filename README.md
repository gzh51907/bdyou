## 项目名称：本地有(webapp)+后台管理系统
>一款提供本地购物服务的电商app，让用户不出门也能逛超市买菜，买生活必需品。
>后台管理系统提供用户注册信息管理，商品信息管理以及用户订单信息管理

* 上线地址：
    * webAPp：http://120.78.213.100:5211
    * 后台管理系统：http://120.78.213.100:5210

* git仓库地址：
>https://github.com/gzh51907/bdyou

* 技术栈

    * 前端：Vue Vue-Router Vuex Vue-Cli axios elementUI/Vant/ git
    * 后端：nodejs Express MongoDB

* 团队与分工：
    * 组长：杨明 成员：祁国庆 邱南焰 覃湲康

    * 杨明：主要负责后台管理系统页面以及功能的实现，使用vue—cli脚手架创建项目，组件化开发，利用elementUI实现页面，axios请求数据库数据进行渲染，使用vuex管理后台系统的登录信息以及app注册登录的修改；并且负责上线。

    * 祁国庆：主要负责app项目路由搭建，利用Vant前端框架实现首页,分类和购物车页面，axios请求后台数据渲染，并且实现相应页面的功能。

    * 邱南焰：主要负责店铺列表跟店铺详情页面以及注册登录页面功能的实现，利用利用elementUI实现页面，axios请求数据库数据进行渲染。

    * 覃湲康：主要负责数据库接口的实现，利用Nodejs+Express搭建服务器，实现数据库MongoDB的连接。

* 项目页面截图：

    * webAPP
    ![home](https://github.com/gzh51907/bdyou/blob/master/project_img/home.png)
    ![分类](https://github.com/gzh51907/bdyou/blob/master/project_img/clasify.png)
    ![登录](https://github.com/gzh51907/bdyou/blob/master/project_img/login.png)
    ![注册](https://github.com/gzh51907/bdyou/blob/master/project_img/reg.png)
    * 后台管理系统
   ![商品信息](https://github.com/gzh51907/bdyou/blob/master/project_img/%E5%95%86%E5%93%81%E4%BF%A1%E6%81%AF.png)
   ![用户注册信息](https://github.com/gzh51907/bdyou/blob/master/project_img/%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C%E4%BF%A1%E6%81%AF.png)
* 项目文件目录：

    ​    ├─bendiyou

    ​    │  ├─dist

    ​    │  │  ├─css

    ​    │  │  ├─fonts

    ​    │  │  ├─img

    ​    │  │  └─js

    ​    │  ├─public

    ​    │  └─src

    ​    │      ├─assets

    ​    │      │  ├─css

    ​    │      │  └─images

    ​    │      ├─components

    ​    │      ├─img

    ​    │      ├─pages

    ​    │      ├─router

    ​    │      └─store

    ​    ├─bendiyouback

    ​    │  ├─bdback

    ​    │  │  ├─css

    ​    │  │  ├─fonts

    ​    │  │  ├─img

    ​    │  │  └─js

    ​    │  ├─public

    ​    │  ├─src

    ​    │  │  ├─assets

    ​    │  │  │  └─css

    ​    │  │  ├─components

    ​    │  │  │  └─product

    ​    │  │  ├─router

    ​    │  │  └─views

    ​    │  └─static

    ​    │      └─JSON

    ​    ├─database

    ​    │  ├─doc

    ​    │  └─src

    ​    │      ├─db

    ​    │      ├─routers

    ​    │      └─utils

    ​    └─project_img
