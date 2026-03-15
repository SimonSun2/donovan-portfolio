# Task 2.2: About Page Development

**Assigned To**: WebDev  
**Priority**: P0  
**Status**: assigned  
**Created At**: 2026-03-15 10:30  

---

## Goal

创建详细的学术和个人背景页面，展示 Donovan 的完整学术档案和个人故事。

---

## Content Requirements (来自 USER.md)

### 1. Personal Story / Hero Section
- 标题：关于我 / About Me
- 副标题：通往工程学的旅程
- 简短的个人陈述：对机械工程/赛车工程的热情来源

### 2. Academic Profile
- **学校**: 深圳国际交流书院 (SCIE)
- **课程**: A-Level
- **当前年级**: 11 年级 (A1)
- **GPA**: 3.85
- **预计毕业**: 2027

### 3. Standardized Test Scores
- **TOEFL**: 112
- **SAT**: 1460 (目标 1500+)
- 显示目标进度条或对比

### 4. Extracurricular Leadership
- **Apex Racing**: 创始人 & 队长
  - F1 in Schools 竞赛
  - 团队领导经验
- **三体社 (Three-Body Club)**: 社长
  - 科学推广活动
  - 组织能力

### 5. Future Goals
- **申请方向**: 2027 Fall
- **目标专业**: 机械工程 / 赛车工程 / 车辆工程
- **申请地区**: 美国大学

---

## Design Requirements

1. **一致性**: 与 Home Page 保持相同的设计语言
   - 主题色：Tech blue (#2563eb)
   - 支持 dark mode
   - 相同的字体和间距系统

2. **布局建议**:
   - Hero section (个人简介)
   - Academic Timeline (时间线展示学术历程)
   - Test Scores (卡片展示 + 进度条)
   - Leadership Section (双栏展示两个核心活动)
   - Future Goals (愿景陈述)

3. **视觉元素**:
   - 可使用图标增强可读性
   - 考虑使用 timeline 组件展示学术历程
   - 保持专业但有人情味

---

## Technical Requirements

- **框架**: React + TypeScript + Tailwind CSS
- **组件结构**: 参考 Home Page 的模块化方式
- **响应式**: 移动端友好
- **代码注释**: 英文

---

## Deliverables

1. `src/pages/About.tsx` - 主页面组件
2. `src/components/About/` - 子组件目录
   - `AcademicTimeline.tsx`
   - `TestScores.tsx`
   - `LeadershipSection.tsx`
   - `FutureGoals.tsx`
3. 更新 `src/App.tsx` 路由 (如需要)
4. 构建成功 (`npm run build`)
5. Git commit & push 到 main 分支
6. 更新 gh-pages 分支部署

---

## Acceptance Criteria

- [ ] 所有 5 个内容板块完整实现
- [ ] 设计与 Home Page 一致
- [ ] 构建无错误
- [ ] 代码推送到 GitHub
- [ ] GitHub Pages 自动更新

---

## Reference

- Home Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/Home.tsx`
- 用户背景：`/root/manager-workspace/USER.md`
- 项目计划：`/root/hiclaw-fs/shared/projects/donovan-portfolio/plan.md`
