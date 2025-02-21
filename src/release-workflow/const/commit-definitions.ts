export const commitDefinitions = [
  {
    id: 'breaking',
    primaryEmoji: '💥',
    emoji: ['💥'],
    versionIncrease: 'major',
    heading: '💥 Breaking Changes',
    order: 10,
    aliases: ['breaking'],
  },
  {
    id: 'feature',
    primaryEmoji: '✨',
    emoji: ['✨', '🌟', '💫', '🌠'],
    versionIncrease: 'minor',
    heading: '✨ Features',
    order: 20,
    aliases: ['feature', 'feat'],
  },
  {
    id: 'performance',
    primaryEmoji: '⚡️',
    emoji: ['⚡️'],
    versionIncrease: 'patch',
    heading: '⚡️ Performance',
    order: 30,
    aliases: ['performance', 'perf'],
  },
  {
    id: 'fix',
    primaryEmoji: '🐛',
    emoji: ['🐛', '🐞', '🚑', '🚨'],
    versionIncrease: 'patch',
    heading: '🐛 Bug Fixes',
    order: 40,
    aliases: ['fix', 'fixes', 'hotfix', 'hotfixes'],
  },
  {
    id: 'docs',
    primaryEmoji: '📚',
    emoji: ['📚', '📖', '📝'],
    versionIncrease: 'patch',
    heading: '📚 Documentation',
    order: 50,
    aliases: ['docs', 'doc'],
  },
  {
    id: 'test',
    primaryEmoji: '🧪',
    emoji: ['🧪', '✅', '🚦'],
    versionIncrease: 'patch',
    heading: '🧪 Tests',
    order: 60,
    aliases: ['test', 'tests'],
  },
  {
    id: 'refactor',
    primaryEmoji: '♻️',
    emoji: ['♻️', '🦄'],
    versionIncrease: 'patch',
    heading: '♻️ Refactor',
    order: 70,
    aliases: ['refactor'],
  },
  {
    id: 'style',
    primaryEmoji: '💄',
    emoji: ['💄', '🎨', '🌈'],
    versionIncrease: 'patch',
    heading: '💄 Style',
    order: 71,
    aliases: ['style', 'cleanup', 'format', 'lint'],
  },
  {
    id: 'chore',
    primaryEmoji: '🔧',
    emoji: ['🔧', '⚙️', '🏗', '⬆️'],
    versionIncrease: 'patch',
    heading: '🔧 Chores',
    order: 72,
    aliases: ['chore', 'chores', 'deps', 'build', 'ci'],
  },
  {
    id: 'prerelease',
    primaryEmoji: '🚧',
    emoji: ['🚧'],
    versionIncrease: 'prerelease',
    heading: '🚧 Pre-release',
    order: 990,
    aliases: ['prerelease'],
  },
  {
    id: 'release',
    primaryEmoji: '🚀',
    emoji: ['🚀'],
    versionIncrease: 'release',
    heading: '🚀 Release',
    order: 1000,
    aliases: ['release'],
  },
] as const;
