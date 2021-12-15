function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

module.exports = {
    content: ['./**/*.{css,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    text: withOpacity('--color-text'),
                    'text-inverted': withOpacity('--color-text-inverted'),
                },
            },

            backgroundColor: {
                skin: {
                    background: withOpacity('--color-background'),
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    muted: withOpacity('--color-muted'),
                    'backgroun-inverted': withOpacity(
                        '--color-background-inverted'
                    ),
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
