# Task 2.3: Projects Page Development

**Assigned To**: WebDev  
**Priority**: P0  
**Status**: assigned  
**Created At**: 2026-03-15 10:51  

---

## Goal

创建 Projects 页面，展示 Donovan 的领导力和项目经历，突出他在课外活动中的深度参与和影响力。

---

## Content Requirements (来自 USER.md)

### 1. Projects Hero / Page Header
- 标题：Projects / 项目展示
- 副标题：Leadership in Action
- 简短介绍：通过项目展示领导力和技术能力

### 2. Apex Racing 🏎️ - Founder & Captain
**核心信息**:
- 创立时间：高中阶段
- 角色：创始人 & 队长
- 竞赛：F1 in Schools World Finals
- 技能展示：
  - CAD 设计 (Fusion 360, SolidWorks)
  - 空气动力学分析
  - 团队管理 (5+ 成员)
  - 项目管理与时间规划
- 成就：
  - 区域赛名次
  - 设计奖项
  - 团队合作奖

### 3. 三体社 (Three-Body Club) 🌌 - President
**核心信息**:
- 创立时间：高中阶段
- 角色：社长 & 创始人
- 活动类型：
  - 科幻小说读书俱乐部
  - 科学讲座组织
  - 天文观测活动
- 技能展示：
  - 组织策划能力
  - 公众演讲
  - 社区建设
- 成就：
  - 会员规模
  - 活动场次
  - 校内影响力

### 4. Additional Projects (可选)
- 个人技术项目
- 开源贡献
- 其他领导经历

---

## Design Requirements

1. **一致性**: 与 Home Page 和 About Page 保持相同的设计语言
   - 主题色：Tech blue (#2563eb)
   - 支持 dark mode
   - 相同的字体和间距系统

2. **布局建议**:
   - Hero section (页面标题 + 简介)
   - Project Grid (2-3 列响应式布局)
   - 每个项目卡片包含:
     - 项目图标/图片
     - 项目名称
     - 角色标签 (Founder, Captain, President)
     - 简短描述
     - 技能标签
     - 成就亮点
     - 链接 (如适用)

3. **视觉元素**:
   - Apex Racing: 赛车/方程式图标 🏎️
   - 三体社：宇宙/科幻元素 🌌
   - 使用图标增强可读性
   - 考虑 hover 动画效果

---

## Technical Requirements

- **框架**: React + TypeScript + Tailwind CSS
- **组件结构**: 参考 Home Page 和 About Page 的模块化方式
- **响应式**: 移动端友好 (单列), 平板 (2 列), 桌面 (3 列)
- **代码注释**: 英文

---

## Deliverables

1. `src/pages/Projects.tsx` - 主页面组件
2. `src/components/Projects/` - 子组件目录
   - `ProjectsHero.tsx`
   - `ProjectGrid.tsx`
   - `ProjectCard.tsx`
   - (可选) `ApexRacingProject.tsx`
   - (可选) `ThreeBodyClubProject.tsx`
3. 更新 `src/App.tsx` 路由 (如需要)
4. 构建成功 (`npm run build`)
5. Git commit & push 到 main 分支
6. 更新 gh-pages 分支部署

---

## Acceptance Criteria

- [ ] 所有核心项目板块完整实现 (Apex Racing + Three-Body Club)
- [ ] 设计与 Home/About Pages 一致
- [ ] 构建无错误
- [ ] 代码推送到 GitHub
- [ ] GitHub Pages 自动更新

---

## Reference

- Home Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/Home.tsx`
- About Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/About.tsx`
- 用户背景：`/root/manager-workspace/USER.md`
- 项目计划：`/root/hiclaw-fs/shared/projects/donovan-portfolio/plan.md`
