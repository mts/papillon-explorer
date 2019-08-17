module.exports = {
  testRegex: '.test\\.js$',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '!**/*.md',
    'packages/**/*.js',
    'packages/**/*.jsx',
    '!**/node_modules/**',
    '!packages/**/index.js',
    '!packages/**/*.test.js',
    '!packages/**/*.story.js',
    '!packages/**/*.render.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
}
