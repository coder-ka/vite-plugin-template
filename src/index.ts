import { Plugin } from "vite";

const fileRegex = /\.(to-upper)$/;

export function vitePluginFuro(): Plugin {
  return {
    name: "transform-file",

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null, // ソースマップがあれば提供する
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
