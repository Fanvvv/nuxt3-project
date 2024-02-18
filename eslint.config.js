import config from "@antfu/eslint-config"

export default config({
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: "double", // or 'double'
    },
    typescript: true,
    vue: true,
    rules: {
        "node/prefer-global/process": "off",
    },
})
