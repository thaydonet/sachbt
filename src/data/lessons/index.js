const mdModules = import.meta.glob('./lessons/*.md', { query: '?raw', import: 'default', eager: true });

const lessons = {};
for (const [path, content] of Object.entries(mdModules)) {
  const key = path.replace('./lessons/', '').replace('.md', '');
  lessons[key] = content;
}

export default lessons;
