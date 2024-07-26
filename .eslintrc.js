export default {
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        amd: true,
        browser: true,
        es6: true,
    },
    rules: {
        indent: ["error", 2],
        quotes: ["warn", "single"],
        semi: ["warn", "never"],
        "no-unused-vars": [
            "error",
            { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],
        "comma-dangle": ["warn", "always-multiline"],
        "vue/multi-word-component-names": [
            "error",
            {
                ignores: [],
            },
        ],
        "vue/eslint-disable-next-line": "off",
        "vue/max-attributes-per-line": "off",
        "vue/no-v-html": "off",
        "vue/require-default-prop": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/html-self-closing": [
            "warn",
            {
                html: {
                    void: "always",
                    normal: "always",
                    component: "always",
                },
            },
        ],
        "vue/no-v-text-v-html-on-component": "off",
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
};
