/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-11 10:45:05
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-14 21:46:09
 * @FilePath: /gzm_house/adminUser.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const timeFormat = require('silly-datetime');
/*
  使用vscode中插件database client查看表

  创建数据库： create database abcdef;

  查询数据库:  show databases;

  进入/切换数据库:  use abcdef

  创建数据表： create table students();

  查看数据表： show tables;

  查询表结构: desc students;

  create table admin_ser(id char,name varchar,remark char,phone int,password char,status varchar,headImg varchar,createdAt varchar,updatedAt varchar);
  create table students(stu_num char(8)not null unique, stu_name varchar(20)not null, stu_gender char(2)not null, stu_age int not null,stu_tel char(11)not null unique, stu_qq varchar(11)unique);
*/
module.exports = app => {
  const DataTypes = app.Sequelize;
  // console.log('adminUser', app.model.define);

  const Model = app.model.define('adminUser', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
      comment: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name',
      comment: '用户名称'
    },
    remark: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'remark',
      comment: '备注'
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'phone',
      comment: '手机号'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'password',
      comment: '密码'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1',
      field: 'status',
      comment: '状态：1：正常，2：停用，3：删除'
    },
    headImg: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'head_img',
      comment: '头像'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at',
      get() {
        return timeFormat.format(new Date(this.getDataValue('createdAt')), 'YYYY-MM-DD HH:mm:ss');
      },
      comment: '创建日期'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
      get() {
        return timeFormat.format(new Date(this.getDataValue('updatedAt')), 'YYYY-MM-DD HH:mm:ss');
      },
      comment: '最近更新日期'
    }
  }, {
    tableName: 'admin_user'
  });

  return Model;
};
