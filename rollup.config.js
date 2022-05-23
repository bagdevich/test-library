import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sass from "rollup-plugin-sass";
import copy from "rollup-plugin-copy-assets";
import svgr from "@svgr/rollup";
import alias from "@rollup/plugin-alias";
// import babel from "@rollup/plugin-babel";
var path = require("path");

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      copy({
        assets: ["src/assets"],
      }),
      peerDepsExternal(),
      alias({
        entries: {
          assets: path.resolve(__dirname, "./src/assets"),
        },
      }),
      resolve({ jsnext: true, main: true, browser: true }),
      sass({ insert: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
      svgr(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
