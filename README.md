# vue3-board

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

############# install

## npm create vue@latest

## npm i -D prettier

############### extension

# vuetify-vscode

# Prettier - Code formatter

    https://prettier.io/docs/en/configuration.html


    .prettierrc.js

            module.exports = {
            semi: false,
            singleQuote: true,
            trailingComma: "all",
            };

# settings.json

    {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true
    }

##### vuetify

    npm i -D vuetify vite-plugin-vuetify
    npm i @mdi/font

######## npm i vee-validate --save

# vue3-board

# npm i axios

#### api

    [GET] select    : /api/vi/domain
    [GET] detail    : /api/vi/domain/{id}
    [PUT] update    : /api/vi/domain/{id}
    [DELETE] delete : /api/vi/domain/{id}
