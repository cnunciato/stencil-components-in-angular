exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-profile'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  buildDir: '../../my-angular-app/src/assets/components'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
