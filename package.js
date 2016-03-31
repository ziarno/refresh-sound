Package.describe({
  name: 'ziarno:refresh-sound',
  version: '0.0.1',
  summary: 'makes a sound on page load',
  git: 'https://github.com/ziarno7/refresh-sound',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript')
  api.mainModule('refresh-sound.js');
  api.export('RefreshSound')
});