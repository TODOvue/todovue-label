<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Label
###### TvLabel is a custom label component for web applications.

[![npm](https://img.shields.io/npm/v/@todovue/tvlabel.svg)](https://www.npmjs.com/package/@todovue/tvlabel) [![Netlify Status](https://api.netlify.com/api/v1/badges/8c4f297a-52d3-46a9-993c-0d39ac25a643/deploy-status)](https://app.netlify.com/sites/todovue-label/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tvlabel.svg)](https://www.npmjs.com/package/@todovue/tvlabel)
[![npm](https://img.shields.io/npm/dt/@todovue/tvlabel.svg)](https://www.npmjs.com/package/@todovue/tvlabel) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-label) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-label)

## Table of Contents
- [Demo](https://todovue-label.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-label/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-label/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-label/blob/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tvlabel
```
```bash
yarn add @todovue/tvlabel
```
Import
```js
import TvLabel from '@todovue/tvlabel'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvLabel from "@todovue/tvlabel";

const app = createApp(App);
app.component("TvLabel", TvLabel);
app.mount("#app");
```

## Usage
```html
<template>
  <tv-label @click-label="clickHandler" color="#4FC08D">
    Vue
  </tv-label>
</template>

<script setup>
  import TvLabel from "@todovue/tvlabel"; // Only if you have not imported it from main
  
   const clickHandler = () => {
    console.log("clicked");
  }
</script>
```

## Props
| Name         | Type    | Default     | Description                                                              |
|--------------|---------|-------------|--------------------------------------------------------------------------|
| color        | String  | `''`        | label color in hexadecimal                                               |
| textLabel    | String  | `''`        | If you don't want to send the name by slot you can send it by property   |
| isEdit       | Boolean | `false`     | If you want to show the edit icon                                        |
| isRemove     | Boolean | `false`     | If you want to show the remove icon                                      |
| iconPosition | String  | `right`     | If you want to show the icons on the `left` or `right` side of the label |
| textColor    | String  | `'inherit'` | Text color                                                               |

## Events
| Name        | Description                                       |
|-------------|---------------------------------------------------|
| click-label | Event that is triggered when the label is clicked |
| click       | Event that is triggered when the label is clicked |

## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/todovue-label.git
cd todovue-label
yarn install
```
---
## License
[MIT](https://github.com/TODOvue/todovue-label/blob/main/LICENSE)
