Package.describe({
  name: 'ziarno:refresh-sound',
  version: '0.0.2',
  summary: 'makes a sound on page load',
  git: 'https://github.com/ziarno7/refresh-sound',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript')
  api.addFiles('refresh-sound.js');
  api.export('RefreshSound')
});