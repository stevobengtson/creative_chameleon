// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAspX-zMkN04ucfr7z4r7t5ptfzgyEahdk',
    authDomain: 'creative-chameleon.firebaseapp.com',
    databaseURL: 'https://creative-chameleon.firebaseio.com',
    projectId: 'creative-chameleon',
    storageBucket: 'creative-chameleon.appspot.com',
    messagingSenderId: '708442655622'
  }
};
