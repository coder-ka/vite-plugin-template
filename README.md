# vite-plugin-template

This repository is a template to create a vite plugin written in typescript.

You can read the official document [here](https://vitejs.dev/guide/api-plugin.html#plugin-api).

## Main source

This is [the main source file](./src/index.ts) using `transform` hook to convert imported source to upper case string declared as javascript value.

## How custom file extension is typed? (or "How 'script ambient module' is included in plugin?")

The Typescript declaration for the custom file extension(`.to-upper`) is [here](./src/script.d.ts).

And the declaration is set configured to exposed in package.json `exports['.'].types` field, so plugin users can refer this declaration by adding one line to `vite-env.d.ts` as following.

```ts
/// <reference types="@author/vite-plugin-your-plugin-name" />
```

This is required unless the type declaration is published to [DefinitlyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) and installed in your plugin.
