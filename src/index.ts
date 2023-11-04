import { Plugin } from "vite";

const fileRegex = /\.(to-upper)$/;

export function vitePluginFuro(): Plugin {
  return {
    name: "transform-file",

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null, // If a source map exists, provide it here.
        };
      }

      return undefined;
    },
  };
}

function compileFileToJS(src: string) {
  const uppered = src.toUpperCase();

  return `export default \`${uppered.replace("`", "\\`")}\``;
}
