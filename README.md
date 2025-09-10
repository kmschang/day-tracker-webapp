# day-tracker-webapp
A web companion to my iOS app that tracks the day of the year, week number, and month details. Users can view past date info, calculate time between dates, and explore insights on days, months, and years in a clean, accessible format.

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
│── scss/
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
npx sass --style=compressed --quiet --silence-deprecation=import,global-builtin scss/bootstrap.scss scss/bootstrap.css --watch
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