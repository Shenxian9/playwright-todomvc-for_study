# 基于 Playwright 的 TodoMVC Web 自动化测试实践

> 副标题：开源测试项目复现与扩展

## 1. 项目简介
本项目定位为一个**软件测试实习/课程汇报向**的小型自动化测试实践项目。  
测试对象采用公开可访问的 TodoMVC 页面，通过 Playwright 完成 Web 自动化测试用例设计与执行。

本仓库属于**开源项目复现与二次扩展**，不是从零开发的业务系统。重点在于：
- 测试环境搭建
- 测试用例补充与分类
- 页面对象（POM）封装
- 报告与测试产物输出

## 2. 技术栈
- TypeScript
- Playwright Test
- GitHub Actions（CI）

## 3. 被测对象说明
- 被测页面：TodoMVC（Ember.js 实现）
- 地址：<https://todomvc.com/examples/emberjs/todomvc/dist/>
- 特点：公开页面、功能清晰，适合作为自动化测试教学与实践样例

## 4. 测试范围
本项目聚焦以下测试类型：
- **功能测试**：新增、完成、删除、筛选
- **边界测试**：空输入、重复内容、长文本
- **状态持久化测试**：刷新后数据与状态保留
- **冒烟测试**：页面可访问、输入框可见、基本流程可走通

不包含后端接口、权限系统、数据库一致性等超出页面能力范围的测试。

## 5. 项目结构
```text
.
├─ README.md
├─ package.json
├─ playwright.config.ts
├─ pages/
│  └─ TodoPage.ts
├─ tests/
│  ├─ functional/
│  │  ├─ add-todo.spec.ts
│  │  ├─ complete-todo.spec.ts
│  │  ├─ delete-todo.spec.ts
│  │  └─ filter-todo.spec.ts
│  ├─ boundary/
│  │  ├─ empty-input.spec.ts
│  │  ├─ duplicate-item.spec.ts
│  │  └─ long-text.spec.ts
│  ├─ persistence/
│  │  └─ refresh-persistence.spec.ts
│  └─ smoke/
│     └─ basic-smoke.spec.ts
├─ test-data/
│  └─ todo-data.ts
├─ docs/
│  ├─ test-plan.md
│  ├─ bug-list.md
│  ├─ report-outline.md
│  └─ screenshots/
└─ .github/
   └─ workflows/
      └─ playwright.yml
```

## 6. 安装与运行
```bash
npm ci
npx playwright install
npm test
```

常用命令：
```bash
npm run test:headed
npm run test:ui
npm run test:report
```

## 7. 测试报告查看方式
- 测试执行后会生成 HTML 报告目录：`test-results/html-report`
- 本地查看：
  ```bash
  npm run test:report
  ```
- 失败用例的截图与 trace 存放在：`test-results/artifacts`

## 8. 项目亮点
- 按测试类型进行目录化管理，结构清晰
- 通过 Page Object Model 降低测试维护成本
- 引入独立测试数据文件，避免硬编码分散
- 配置失败截图和 trace，便于问题定位
- 在 CI 中自动执行并上传测试报告产物

## 9. 开源复现说明
本项目基于开源 TodoMVC 页面进行测试实践，并在原有测试思路基础上进行了结构化重构与用例扩展。  
如需查看原始示例能力，可参考仓库历史测试文件与 Playwright 官方示例。
