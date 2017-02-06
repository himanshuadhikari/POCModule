# POCModule
This repo is for distribution on bower. The goal of this repo is to do a POC for creating a standalone bower component so that it could be inserted into any angular app.

Steps to create a bower component:

- Initialize bower on your project (git repository url is necessary/package name should be in small letters).
- Tag your component - git tag -a v0.1.0 -m "basic bower component".
- Push tag to remote repo - git push origin --tags
- Register you component on bower by bower register poc-module<package name> git@github.com:ttn-himanshu/POCModule.git<git/bitbucket url>
5. Run bower info YourAwesomePackageName  - in our case bower info poc-module
	You should see something like this:

  bower poc-module#*          not-cached https://github.com/ttn-himanshu/POCModule.git#*
	bower poc-module#*             resolve https://github.com/ttn-himanshu/POCModule.git#*
	bower poc-module#*            download https://github.com/ttn-himanshu/POCModule/archive/v0.1.0.tar.gz
	bower poc-module#*             extract archive.tar.gz
	bower poc-module#*        invalid-meta for:/tmp/himanshu/bower/a4486381aea6c81308520564511af52d-12038-SZQtKq/bower.json
	bower poc-module#*        invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
	bower poc-module#*            resolved https://github.com/ttn-himanshu/POCModule.git#0.1.0

	{
	  name: 'POCModule',
	  version: '0.1.0',
	  homepage: 'https://github.com/ttn-himanshu/POCModule',
	  authors: [
	    'himanshu adhikari <himanshu.adhikari@tothenew.com>'
	  ],
	  description: 'The goal of this POC is to create standalone modules that could be inserted / deployed into another angular app (angular app) independently',
	  main: 'dist/testmodule.js',
	  license: 'MIT',
	  ignore: [
	    '**/.*',
	    'node_modules',
	    'bower_components',
	    'test',
	    'tests'
	  ],
	  dependencies: {
	    angular: '1.3.15'
	  }
	}

	Available versions:
	  - 0.1.0
6. Now on any project you can install this module by bower install <module-name> poc-module
