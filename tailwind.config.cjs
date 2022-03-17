module.exports = {
    corePlugins: {
        preflight: true,
    },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
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
