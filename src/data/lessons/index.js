const mdModules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

const lessons = {};
for (const [path, content] of Object.entries(mdModules)) {
  const key = path.replace('./', '').replace('.md', '');
  lessons[key] = content;
}

export default lessons;
