<h1 align="center">day-tracker-webapp</h1>
<p align="center">A web companion to my iOS app that tracks the day of the year, week number, and month details. Users can view past date info, calculate time between dates, and explore insights on days, months, and years in a clean, accessible format.</p>
<p align="center">
  <img src="https://img.shields.io/github/license/kmschang/day-tracker-webapp?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub License">
  <img src="https://img.shields.io/github/v/release/kmschang/day-tracker-webapp?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Release">
  <img src="https://img.shields.io/github/commit-activity/t/kmschang/day-tracker-webapp?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Commit Activity">
  <img src="https://img.shields.io/github/last-commit/kmschang/day-tracker-webapp?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Last Commit">
  <img src="https://img.shields.io/github/contributors/kmschang/day-tracker-webapp?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Contributors">
</p>
<div align="center">
  <img src="https://img.shields.io/badge/HTML-D25936.svg?style=flat&logo=html5&logoColor=white" alt="HTML Badge">
  <img src="https://img.shields.io/badge/CSS-3271B3.svg?style=flat&logo=css&logoColor=white" alt="CSS Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/PHP-777BB4.svg?style=flat&logo=PHP&logoColor=white" alt="PHP Badge">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap Badge">
  <img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm Badge">
  <img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat&logo=Sass&logoColor=white" alt="sass Badge">
  <img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON Badge">
  <img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown Badge">
</div>

---

## Bootstrap Setup

1. Set up npm and sass
``` bash
npm init -y
npm install bootstrap sass terser
```

2. Create scss folder
```text
project-root/
│── scss/
│   └── custom.scss             # Custom formatting
│   └── bootstrap.scss        # Bootstrap formatting with changes
│   └── bootstrap.css (generated)   # Complied will both files above
│── js/
│   └── custom.js             # Custom functions
│   └── main.js                 # All JS function together
│── index.html
```

3. Configure `bootstrap.scss` file
``` scss
// Make sure the file paths match
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";

// Negative Margins
$enable-negative-margins: true;

// Custom Fonts
$headings-font-family: 'DM Serif Display', sans-serif;
$font-family-base: 'Inter', sans-serif;
$display-font-family: 'Inter', sans-serif;

// Custom Colors
$custom-colors: (
        "Sonnaz-Red":#A43240,
        "Sonnaz-Gray":#1B1C1E,
        "Sonnaz-Light-Gray":#242528,
        "Sonnaz-Lighter-Gray":#595b5C,

);

$theme-colors: map-merge($theme-colors, $custom-colors);

// Importing Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";

// Importing Custom Styles
@import "custom.scss";
```

4. Compile SCSS -> CSS with sass
- This will create a fully-comprehensive one-file place for all styling including custom classes, added colors/fonts, and new variables
- This will also make a .min file for easier importing into projects
- This will also have it watch the files so everytime you update something, it will remake the scss files so it will be ready to go in the html file
```bash
npx sass scss/bootstrap.scss scss/bootstrap.css --watch
npx sass --style=compressed scss/bootstrap.scss scss/bootstrap.css --watch
```
- **Optional:** To stop deprecation errors and such
``` bash
npx sass --quiet --silence-deprecation=import,global-builtin scss/bootstrap.scss scss/bootstrap.css --watch
npx sass --style=compressed --quiet --silence-deprecation=import,global-builtin scss/bootstrap.scss scss/bootstrap.min.css --watch
```
5. Confire `main.js` file
``` bash
import 'custom.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

console.log("Main JS is loaded!");
```
6.  Use in `index.html`
``` bash
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/main.js"></script>
```

---

## Testing Webpage

1. Set up php server
``` bash
php -S localhost:8000
```

2. Go to website
```
http://localhost:8000/dayTrackerWebapp.php
```

---
