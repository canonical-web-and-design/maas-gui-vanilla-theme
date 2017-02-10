# MAAS GUI Framework

A extension of [Vanilla framework](https://github.com/ubuntudesign/vanilla-framework), written in [Sass](http://sass-lang.com/). The framework is used as the front-end tool for MAAS (Metal as a Service) a cloud style offering for provisioning servers at scale.

[Documentation](http://ubuntudesign.github.io/maas-gui-vanilla-theme/) |
[Project Task Board](https://github.com/ubuntudesign/maas-gui-vanilla-theme/projects)

## Hotlinking

If you just need to include the latest compiled version of the MAAS GUI Framework, use our hosted version and fonts to kick start you project.

``` html
<link href="https://assets.ubuntu.com/v1/0ccafbe2-maas-gui-framework.build-1.1.0.min.css"rel="stylesheet" type="text/css" media="screen">
<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
```


## Including Vanilla in your project via NPM

Pull down the latest version of Vanilla into your local `node_modules` folder
and save it into your project's dependencies (`package.json`) as follows:

``` bash
npm install maas-gui-vanilla-theme --save-dev
```

To build the minified and un-minified CSS run:

``` bash
gulp build
```

You can override any of the settings in [_settings.defaults.scss](scss/_settings.defaults.scss).

## Demo

To see the latest changes and updates live please view the [demo page](http://ubuntudesign.github.io/maas-gui-vanilla-theme/)

Code licensed [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](http://www.canonical.com/)

With ♥ from Canonical

