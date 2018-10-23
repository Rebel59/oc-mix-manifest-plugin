# Read Mix Manifest with Twig Function
This little plugin reads the Mix Manifest that is generated by the standalone version of Laravel Mix. 

## Setup
In order to use this plugin you will need set up Laravel Mix (duh!) and enable the versioning in the `webpack.mix.js`. 

The next step is set up your `env` file and add the `MANIFEST_PATH` field to your `env` file. This entry needs to points directly to the manifest file in your project. 

## How to use
After installing this plugin you can call `getVersionedCss()` in Twig. This function takes one parameter which should be the relative path to the file from inside your `assets` folder. 

``` 
<link rel="stylesheet" href="{{ getVersionedCss('/dist/app.css') }}">
```

## Advanced usage
Without a second parameter the `getVersionedCss` function assumes that your relative path starts at `themes/{themename}/assets`. If your assets are located elsewhere you can pass a second parameter to the function which replaces the standard `"/assets"` path prefix. 

__Note: The `/`  before the actual path is required for this to work__

``` 
<link rel="stylesheet" href="{{ getVersionedCss('/dist/app.css' , '/my-assets-path') }}">
```

## Setting up Laravel Mix
This plugin is based on a front-end workflow based on Jeffrey Way's standalone Laravel Mix that can be found [here](https://github.com/JeffreyWay/laravel-mix). An example of a `package.json` and `webpack.mix.js` are also present in this repository. Further documentation on how to use Laravel Mix can be found in the docs of Laravel Mix.