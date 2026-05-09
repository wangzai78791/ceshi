# Personal Homepage

一个使用 React + Vite 构建的个人作品集主页。

## 功能

- 首页个人介绍
- 技能标签展示
- 项目卡片展示
- 联系方式入口
- 响应式布局，适配桌面和手机

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 上传到 GitHub

1. 打开 GitHub，点击右上角 `+`，选择 `New repository`。
2. Repository name 填 `personal-homepage`。
3. 选择 `Public`。
4. 不勾选 README、`.gitignore`、license。
5. 创建仓库后复制 HTTPS 地址。
6. 在本项目目录运行：

```bash
git remote add origin <你的 GitHub HTTPS 地址>
git branch -M main
git push -u origin main
```

## 自定义内容

打开 `src/App.jsx`，替换“你的名字”、项目介绍和邮箱地址即可。
