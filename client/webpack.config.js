const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
              { family: 'Mulish' },
              { family: 'Montserrat' }, { family: "Source Sans Pro" },
            ]
        })
    ]
}