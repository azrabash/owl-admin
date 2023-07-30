<div align="center">
    <br/>
    <img src="https://slowlyo.gitee.io/static/images/owl-admin/logo.png" alt="" />
    <h1 align="center">
        Owl Admin
    </h1>
    <h4 align="center">
        快速且灵活的后台框架
    </h4> 

[官网](https://owladmin.com) | [Demo](http://demo.owladmin.com) | [Github](https://github.com/Slowlyo/owl-admin) | [Gitee](https://gitee.com/slowlyo/owl-admin) | [文档](http://doc.owladmin.com) | [加群](https://jq.qq.com/?_wv=1027&k=5La4Ir6c)

</div>

<p align="center">
    <a href="https://www.php.net/">
        <img src="https://img.shields.io/badge/PHP-8.0%2B-%23268af1" alt="Pear Admin Layui Version">
    </a>
&nbsp;
    <a href="https://laravel.com/">
        <img src="https://img.shields.io/badge/Laravel-9.0%2B-%23268af1" alt="Jquery Version">
    </a>
&nbsp;
      <a href="https://aisuda.bce.baidu.com/amis/zh-CN/docs/index">
        <img src="https://img.shields.io/badge/Amis-3.0%2B-%23268af1" alt="Layui Version">
    </a>
&nbsp;
      <a href="https://packagist.org/packages/slowlyo/owl-admin">
        <img src="https://img.shields.io/badge/license-MIT-%23268af1" alt="Layui Version">
    </a>
</p>

<br>

<div align="center">
  <img  width="92%" style="border-radius:4px;margin-top:20px;margin-bottom:20px;box-shadow: 2px 0 6px gray;" src="https://slowlyo.gitee.io/static/images/owl-admin/home-page1.png" />
</div>
<br>

### 项目介绍
Background framework developed based on 'Laravel' and 'amis', fast and flexible~ 
- Build pages in JSON based on AMIS to reduce the workload of front-end development and improve development efficiency.
- In the case that more than 100 components of AMIS are not satisfied, you can develop your own front-end.
- The frame is separated from the front and back ends (no more tied up because of the frame~).
<br>

### Built-in features - Basic background functions - Background user management - Role management - Permission management - Menu management - **Code Generator** - Save the build record - Import/export build records - You can use the command to clean up the generated content - Build full functionality without code changes - 'Amis' fully packaged 120+ components, no front-end development required to complete complex pages - 'laravel-modules' multi-module support - Extended management
<br>

### 截图

![登录](https://slowlyo.gitee.io/static/images/owl-admin/_login.png)
![首页](https://slowlyo.gitee.io/static/images/owl-admin/_home.png)
![可视化编辑器](https://slowlyo.gitee.io/static/images/owl-admin/_editor.png)

<br>

### 安装

> 👉 __注意: `OwlAdmin` 是 `laravel` 的扩展包, 安装前请确保你会使用 `laravel`__

##### 1. 创建 `laravel` 项目

```php
composer create-project laravel/laravel example-app
```

##### 2. 配置数据库信息

```dotenv
# .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=owl_admin
DB_USERNAME=root
DB_PASSWORD=
```

##### 3. 获取 `Owl Admin`

```shell
composer require slowlyo/owl-admin
```

##### 4. 安装

```shell
# 先发布框架资源
php artisan admin:publish
# Perform the installation (you can modify some configurations in config/admin.php before executing the installation command)
php artisan admin:install
```

##### 5. 运行项目

Start the service and access the '/admin' route <br>
_The initial account password is 'admin'_
<br>

### 支持项目

如果觉得项目不错，或者已经在使用了，希望你可以去 [Github](https://github.com/Slowlyo/owl-admin)
或者 [Gitee](https://gitee.com/slowlyo/owl-admin) 帮我们点个 ⭐ Star，这将是对我们极大的鼓励与支持。

<br>
<br>

感谢 [__JetBrains__](https://jb.gg/OpenSourceSupport) 提供的 `IDE` 支持

<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png?_gl=1*cg0jw0*_ga*NTA2ODgwODQyLjE2NTU3MzAyNTI.*_ga_9J976DJZ68*MTY4NTUzNjY1Ny4xMS4xLjE2ODU1MzY2NjAuMC4wLjA.&_ga=2.105214851.1872617824.1685460785-506880842.1655730252" width="50px">
