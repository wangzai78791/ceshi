const skills = ['React', 'Vite', 'JavaScript', 'CSS', '产品思维', '快速原型'];

const projects = [
  {
    title: '项目一：个人主页',
    description: '一个用于展示个人介绍、技能与作品的响应式主页。',
    tag: 'Web',
  },
  {
    title: '项目二：效率工具',
    description: '记录任务、整理想法，并帮助日常工作更有秩序。',
    tag: 'Tool',
  },
  {
    title: '项目三：创意实验',
    description: '把小想法做成可交互的网页体验，保持持续探索。',
    tag: 'Lab',
  },
];

function App() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#home" aria-label="返回首页">
          <span className="brand-mark">你</span>
          <span>个人主页</span>
        </a>
        <div className="nav-links">
          <a href="#skills">技能</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">前端开发 / 创作者</p>
          <h1>你好，我是你的名字。</h1>
          <p className="intro">
            我喜欢把想法做成清晰、好用、漂亮的网页产品。这里会放我的项目、
            技能和联系方式，之后可以替换成真实内容。
          </p>
          <div className="hero-actions" aria-label="主要操作">
            <a className="primary-button" href="#projects">
              查看项目
            </a>
            <a className="secondary-button" href="#contact">
              联系我
            </a>
          </div>
        </div>

        <div className="profile-panel" aria-label="个人概览">
          <div className="portrait">
            <span>YW</span>
          </div>
          <div className="profile-meta">
            <p>当前状态</p>
            <strong>正在构建新的作品集</strong>
          </div>
          <div className="metrics">
            <span>
              <strong>3+</strong>
              项目展示
            </span>
            <span>
              <strong>6</strong>
              核心技能
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>我能做什么</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>精选项目</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>一起把想法做出来。</h2>
        </div>
        <a className="primary-button" href="mailto:you@example.com">
          you@example.com
        </a>
      </section>
    </main>
  );
}

export default App;
