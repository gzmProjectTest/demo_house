<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-11 11:24:49
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-11 14:08:48
 * @FilePath: /gzm_house/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## mac电脑如何启用数据库
### 1、查看系统偏好设置，打开后是否有mysql图片，点进入查看是否已启动

### 2、如何创建数据库

  #### 2.1 、Mac 快速进入mysql命令行
    在终端可以直接使用：mysql -u root -p  进行登录。 密码是下载数据库时root密码。
    参考地址：http://www.taodudu.cc/news/show-5125743.html?action=onClick

  #### 2.2、终端进入 mysql ，使用命令创建数据库名称。
     使用vscode中插件database client查看表

    *****注意：一定要有 ; 分号，否则指令不生效。
    创建数据库： create database abcdef(数据库名称);

    查询数据库:  show databases;

    删除数据库： drop database <dbName>;

    进入/切换数据库:  use abcdef(数据库名称)

    创建数据表： create table students(表名称);

    查看数据表： show tables;

    查询表结构: desc students;

    create table admin_ser(id char,name varchar,remark char,phone int,password char,status varchar,headImg varchar,createdAt varchar,updatedAt varchar);
    create table students(stu_num char(8)not null unique, stu_name varchar(20)not null, stu_gender char(2)not null, stu_age int not null,stu_tel char(11)not null unique, stu_qq varchar(11)unique);