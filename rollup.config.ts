import del from "rollup-plugin-delete";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      esbuild({
        minify: true,
        drop: ["console", "debugger"],
      }),
      json(),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.d.cts",
        format: "cjs",
      },
      {
        file: "dist/index.d.mts",
        format: "esm",
      },
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [dts({
      // https://github.com/Swatinem/rollup-plugin-dts/issues/143
      compilerOptions: { preserveSymlinks: false },
      respectExternal: true,
    })],
  },
];
