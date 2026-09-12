---
sidebar_position: 8
description: 给班级设置任课教师、每周课次、教室和期望时间。
---

# 给班级安排课程

**入口：左侧“课程计划”。**

这一页回答四个问题：谁来教、每周几节、在哪里上、哪些时间可以上。

## 第1步：选择一个班级

先选一个有代表性的班级，把它配置完整，再复制给相似班级。

班级卡片上的进度表示资料配置情况，不代表已经排课成功。

[![课程计划班级列表与配置进度](../../static/screenshot/guide/planning-classes.png)](../../static/screenshot/guide/planning-classes.png)

## 第2步：打开科目，选择任课教师

点击科目卡片，在 **教师** 中搜索并选择任课教师。同一科目有多个授课任务时，使用 **新增授课老师**。

本班不上的科目可设为 **不安排**，不必建立空课次。

[![班级科目列表：点击科目开始配置](../../static/screenshot/guide/planning-subjects.png)](../../static/screenshot/guide/planning-subjects.png)

## 第3步：明确是否使用教室

- 需要教室：选择 **使用教室**，再添加默认教室。
- 不需要教室：选择 **不使用教室**。

**教室留空不等于“不使用教室”。** 例如体育课不用教室，就要明确选中“不使用教室”。

[![科目配置中的教师与使用教室开关](../../static/screenshot/guide/planning-task.png)](../../static/screenshot/guide/planning-task.png)

## 第4步：设置每周课次

点击 **编辑课次**，通过 **新增课次** 添加课次，也可以复制已有课次。

例如每周5节数学，通常需要5个课次。复制后仍要核对各课次的时间与教室。

[![课次编辑：新增、复制、期望时间和保存授课任务](../../static/screenshot/guide/planning-lessons.png)](../../static/screenshot/guide/planning-lessons.png)

## 第5步：给课次选择期望时间

1. 在一个课次中点击 **选择期望时间**。
2. 选择适用的教学周，例如全学期、单周或双周。
3. 选择优先级，再在周课表中选择允许上课的时段。
4. 核对所有需要的星期，点击 **保存**。

**“全学期”管的是第几教学周，不会自动替你选中周一到周五。** 想让课程能排在多个星期，就要确认这些星期的时段都已选中。

“最高优先”表示更希望排在那里；“绝对不排”表示禁止。不要把禁止时段当成候选时间。

[![期望时间：教学周、优先级和周一到周五的候选时段](../../static/screenshot/guide/expected-time.png)](../../static/screenshot/guide/expected-time.png)

## 第6步：保存授课任务

完成时间选择后，回到课次或科目配置，点击 **保存授课任务**。

仅关闭时间弹窗或课次弹窗，不等于保存了课程计划。保存后重新打开一个课次，确认时间和教室仍然正确。

[![课次编辑底部的保存授课任务按钮](../../static/screenshot/guide/planning-lessons.png)](../../static/screenshot/guide/planning-lessons.png)

## 第7步：复制到其他班级

1. 回到班级列表，打开目标班级。
2. 在 **从完整班级复制** 中选择来源班级，点击 **复制配置**。
3. 检查目标班的教师、实际教室和差异课程，再保存。

没有可选来源班级时，先完成一个班级的配置。也可以使用 **从其他课程导入课次设置** 复用课次设置，但仍须核对当前教师。

[![目标班级上方的从完整班级复制区域](../../static/screenshot/guide/planning-subjects.png)](../../static/screenshot/guide/planning-subjects.png)

## 完成后检查

- [ ] 每个科目的教师、每周课次数正确。
- [ ] 不用教室的课程已明确选中“不使用教室”。
- [ ] 期望时间覆盖需要的星期与教学周。
- [ ] 已保存授课任务，并重新打开核对。

需要批量改期望时间？查看 [AI 期望时间专项模式](./ai-agent.md)。下一步：[设置排课要求](./constraints.md)。
