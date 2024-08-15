// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigDirName: import.meta.dirname,
            },
        },
        rules: {
            "no-console": "error",
            "dot-notation": "error",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-misused-promises": "off",
        },
    },
    {
        files: ["**/*.mjs"],
        ...tseslint.configs.disableTypeChecked,
    },
    eslintConfigPrettier,
);
