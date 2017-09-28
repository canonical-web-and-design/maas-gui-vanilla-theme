# MAAS GUI Framework

[![Build Status](https://travis-ci.org/ubuntudesign/maas-gui-vanilla-theme.svg?branch=master)](https://travis-ci.org/ubuntudesign/maas-gui-vanilla-theme)
[![npm version](https://badge.fury.io/js/maas-gui-vanilla-theme.svg)](http://badge.fury.io/js/maas-gui-vanilla-theme)
[![Downloads](http://img.shields.io/npm/dm/maas-gui-vanilla-theme.svg)](https://www.npmjs.com/package/maas-gui-vanilla-theme)
[![devDependency Status](https://david-dm.org/ubuntudesign/maas-gui-vanilla-theme/dev-status.svg)](https://david-dm.org/ubuntudesign/maas-gui-vanilla-theme#info=devDependencies)

A extension of [Vanilla framework](https://github.com/ubuntudesign/vanilla-framework), written in [Sass](http://sass-lang.com/). The framework is used as the front-end tool for MAAS (Metal as a Service) a cloud style offering for provisioning servers at scale.

[Documentation](http://ubuntudesign.github.io/maas-gui-vanilla-theme/) |
[Project Task Board](https://github.com/ubuntudesign/maas-gui-vanilla-theme/projects)

## Hotlinking

If you just need to include the latest compiled version of the MAAS GUI Framework, use our hosted version and fonts to kick start you project.

``` html
<link href="https://assets.ubuntu.com/v1/16283d22-maas-gui-framework.build-1.2.9.min.css" rel="stylesheet" type="text/css" media="screen">
<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
```


## Including MAAS GUI Framework in your project via NPM

Pull down the latest version of MAAS GUI Framework into your local `node_modules` folder
and save it into your project's dependencies (`package.json`) as follows:

``` bash
npm install maas-gui-vanilla-theme
```
*NOTE: if using npm version 4.0.0 or higher add ```--legacy-bundling``` to your npm install command*

## Local development

If you wish to download or clone this repo run the following commands to setup and create the minified CSS:

``` bash
npm install
gulp build
```
You can override any of the settings in [_settings.defaults.scss](scss/_settings.defaults.scss).

## Demo

To see the latest changes and updates live please view the [demo page](http://ubuntudesign.github.io/maas-gui-vanilla-theme/)

## Change log

### v1.2.0

- Created new notification group style, to be used when multiple notifications of one category are to be displayed on the screen without swamping the UI.
- New secondary page navigation pattern has been included. This shall be used as secondary navigation for pages which are too long or require tabbed content.
- Meter element has been styled to follow our new component color styles. Can be used to show machine information such as CPU, RAM e.t.c.

### v1.1.1

- Uploading missing font assets and giving the ability to turn on or off local assets for fonts in ```_settings.defaults.scss```
- Removing the sass docs gulp requirements, gulp command and scss comments.

### v1.1.0

- Updated all icons and colour set within the framework. This will keep inline with the Vanilla Framework and the new visual update which is going across all products
- Links have changed from black to blue. This keeps MAAS inline with Juju and other Cloud products also improves the visual UX.
- Improved the responsive nature of MAAS. Tables especially have been improved. The new card view and label using ```aria-label``` improves the readability and uses on mobile / small screens.
- All assets have been renamed and also hosted on https://assets.ubuntu.com. This gives the flexibility to use hosted assets or to host them locally dependant on project.
- Navigation responsive issues have been resolved.
- Flash messages has been removed and now replaced with the improved notification pattern.
- New utility classes ```u-display--mobile``` & ```u-display--desktop``` have been added for extra responsive development / design flexibility.
- Accordion styles have been slightly improved. Removing the cross style and keeping it consistent with our remove style.
- Login action card styles have been added to the framework.

Code licensed [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](http://www.canonical.com/)

With ♥ from Canonical
