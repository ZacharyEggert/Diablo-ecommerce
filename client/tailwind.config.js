module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,css,html}', './public/**/*.{js,jsx,css,html}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                grey: {
                    100: '#ededed',
                    200: '#d0d0d0',
                    300: '#b5b5b5',
                    400: '#9a9a9a',
                    500: '#808080',
                    600: '#676767',
                    700: '#4f4f4f',
                    800: '#383838',
                    900: '#232323',
                    a00: '#0d0d0d',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
