const colors = require('tailwindcss/colors');

module.exports = {
    content: ['style/globalStyle.css', 'components/**/*.tsx', 'pages/**/*.tsx'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                grey: colors.trueGray,
                gray: colors.trueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
