# POCModule
This repo is for distribution on bower. The goal of this repo is to do a POC for creating a standalone bower component so that it could be inserted into any angular app.

# Install
You can install this package with `bower`.
```
bower install poc-module
```
# Usage
Add following script to index.html
```
<script src="bower_components/poc-module/dist/pocmodule.js"></script>
```
then use below directive on html
```
<test-directive></test-directive>
```

### Steps to create a bower component:

- Initialize bower on your project - `bower init`. Fill the fields. (**Note** : git/bitbucket repository url is necessary and package name should be in small letters).

- Tag your component - 
```
git tag -a v0.1.0 -m "basic bower component"
```

- Push tag to remote repo - 
```
git push origin --tags
```

- Register you component on bower by 
```
bower register poc-module<package name> git@github.com:ttn-himanshu/POCModule.git<git/bitbucket url>
```
- After registering run 
```
bower info YourAwesomePackageName
```  
in our case `bower info poc-module`

#### You should see something like this:

```
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
```

- Now on any project you can install this module by 

```
bower install poc-module
```


### Updating and maintenance:
- Make the necessary changes to your package/module (bug fixes, new features, etc, etc...whatever it might be).
- Update your `bower.json` file with the new version for the package.
- Commit your changes, tag the repository and push your changes to git (don't forget to include the --tags switch with your push command to your remote!)


There's few things to notice here. Bower relies solely on git/bitbucket tags for packaging version information. This means whenever you want to release a new version of your module you have only to create a new tag in your repository with the new version number for the update. Also don't forget to update the version number on `bower.json` file also.

#### Steps to update bower component
```
# commit your changes
git commit -am "Made some awesome new changes, now its even awesomer"

# tag the commit
git tag -a v0.0.2 -m "Release version 0.0.2"

# push to GitHub
git push origin master --tags  
```

