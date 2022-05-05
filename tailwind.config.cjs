module.exports = {
    corePlugins: {
        preflight: true,
    },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(9deg)',
                    },
                    '50%': {
                        transform: 'rotate(-9deg)',
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 0.3s ease-in-out infinite',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    primary: '#f0bba0',
                    secondary: '#e5989b',
                    accent: '#93a392',
                    neutral: '#ffb4a2',
                    'base-100': '#ffe4d6',
                },
                chalk: {
                    primary: '#dbd3bc',
                    secondary: '#dbc8bd',
                    accent: '#93a392',
                    neutral: '#ffb4a2',
                    'base-100': '#f6f4ee',
                },
            },
            'synthwave',
            'night',
            'cupcake',
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'night',
    },
};
