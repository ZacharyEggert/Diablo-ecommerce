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
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'fade-out': 'fadeOut 0.5s ease-in-out',
                'spin-reverse': 'spinReverse 1s linear infinite',
            },

            keyframes: {
                spinReverse: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(-360deg)' },
                },
            },

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
    plugins: [require('@tailwindcss/forms')],
};
