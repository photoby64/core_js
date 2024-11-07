import globals from "globals";
import pluginJs from "@eslint/js";



const type = {
  isObject:true,
  isArray:true,
};



export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        isObject:true,
      },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
];
