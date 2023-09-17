import { defineConfig } from "tsup";

// https://modyqyw.top/blogs/2022/12/why-tsup.html
export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  splitting: false,
  shims: true,
  clean: true,
  outDir: "build",
  format: ["cjs", "esm"],
  banner: ({ format }) => {
    if (format === "esm") {
      return {
        js: `import {createRequire as __createRequire} from 'module';var require=__createRequire(import.meta.url);`,
      };
    }
  },
});
