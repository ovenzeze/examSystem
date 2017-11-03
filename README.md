# 项目简介
新卓越在线考试系统，整个项目分为考试系统`exam-system`和管理系统`manage-system`两个部分。
考试系统实现学员登录、在线考试、成绩查看等功能，管理系统实现系统概览、学员管理、成绩管理、
考试管理、试题管理等功能。

项目预览地址：[http://clayz.top/exam-system-manage/](http://clayz.top/exam/manage-system/exam-summary.html)
# 整体架构
详见仓库`DOCS目录`下需求说明书。
# 技术栈
为了保证整体风格统一和兼容性，考试系统和管理系统前端部分，均基于`Bootstrap3`实现，`JavaScript`使用了`Jquery`和`Echart`。
后台部分，目前仅使用基于`Node`的`Koa`框架进行数据`Mook`。
# API约定
详见仓库根目录下`data.json`
# 成员分工
<img src="http://clayz.top/media/member-division.jpg" width = "400px"/>
# 后续开发方向
* 开发可用后台支撑系统，不再使用数据Mook
* 完善在线考试系统部分
* 提高系统流畅性，增强用户体验
