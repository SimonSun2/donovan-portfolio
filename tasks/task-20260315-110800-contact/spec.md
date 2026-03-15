# Task 2.5: Contact Page Development

**Assigned To**: WebDev  
**Priority**: P1  
**Status**: assigned  
**Created At**: 2026-03-15 11:08  

---

## Goal

创建 Contact 页面，为大学招生官、合作伙伴和其他访客提供与 Donovan 取得联系的便捷渠道，展示专业形象。

---

## Content Requirements (来自 USER.md)

### 1. Contact Hero / Page Header
- 标题：Get in Touch / 联系我
- 副标题：Let's Connect
- 简短介绍：欢迎大学招生官、教育工作者和合作伙伴联系

### 2. Contact Form 联系表单
**表单字段**:
- **Name** (必填) - 姓名
- **Email** (必填，邮箱格式验证) - 邮箱
- **Subject** (可选) - 主题
- **Message** (必填) - 消息内容

**表单功能**:
- 客户端验证 (必填字段、邮箱格式)
- 提交状态反馈 (成功/错误)
- 重置功能
- 防垃圾提交 (可选)

### 3. Contact Information 联系信息
**基本信息**:
- **Email**: [邮箱地址]
- **Location**: Shenzhen, Guangdong, China
- **Availability**: 欢迎大学招生、教育合作相关咨询

### 4. Social Links 社交链接
**平台链接**:
- **LinkedIn** - 职业社交网络
- **GitHub** - 代码项目展示
- **Email** - 直接邮件联系

**设计建议**:
- 使用品牌图标 (LinkedIn, GitHub)
- Hover 效果
- 新标签页打开

---

## Design Requirements

1. **一致性**: 与 Home/About/Projects/Skills Pages 保持相同的设计语言
   - 主题色：Tech blue (#2563eb)
   - 支持 dark mode
   - 相同的字体和间距系统

2. **布局建议**:
   - Hero section (页面标题 + 简介)
   - 2 列布局 (桌面端):
     - 左列：Contact Form
     - 右列：Contact Info + Social Links
   - 移动端：单列堆叠

3. **表单设计**:
   - 清晰的字段标签
   - 输入框焦点状态
   - 验证错误提示 (红色)
   - 成功提交反馈 (绿色)
   - 提交按钮 hover 效果

4. **响应式**:
   - 移动端：单列布局，表单字段堆叠
   - 平板：2 列布局
   - 桌面：2 列布局，更宽间距

---

## Technical Requirements

- **框架**: React + TypeScript + Tailwind CSS
- **表单验证**: 客户端验证 (可使用 HTML5 验证或简单 JS)
- **组件结构**: 参考之前页面的模块化方式
- **响应式**: 移动端友好
- **代码注释**: 英文

**注意**: 表单提交功能可以暂时使用 `mailto:` 链接或简单的 `formsubmit.co` 等第三方服务，不需要后端。

---

## Deliverables

1. `src/pages/Contact.tsx` - 主页面组件
2. `src/components/Contact/` - 子组件目录
   - `ContactHero.tsx`
   - `ContactForm.tsx`
   - `ContactInfo.tsx`
   - `SocialLinks.tsx`
   - `index.ts`
3. 更新 `src/App.tsx` 路由 (如需要)
4. 构建成功 (`npm run build`)
5. Git commit & push 到 main 分支
6. 更新 gh-pages 分支部署

---

## Acceptance Criteria

- [ ] 所有 4 个核心板块完整实现
- [ ] 表单验证功能正常
- [ ] 设计与前几页一致
- [ ] 构建无错误
- [ ] 代码推送到 GitHub
- [ ] GitHub Pages 自动更新

---

## Reference

- Home Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/Home.tsx`
- About Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/About.tsx`
- Projects Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/Projects.tsx`
- Skills Page 代码：`/root/hiclaw-fs/shared/projects/donovan-portfolio/src/pages/Skills.tsx`
- 用户背景：`/root/manager-workspace/USER.md`
- 项目计划：`/root/hiclaw-fs/shared/projects/donovan-portfolio/plan.md`
