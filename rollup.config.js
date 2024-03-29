import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'

const packageJson = require("./package.json");

export default [
  {
    input: "src/library/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      scss({
        output: 'chsu-calendare/styles.min.css',
        outputStyle: "compressed"
      })
    ],
  },
  {
    input: "src/library/index.ts",
    output: [{ file: "chsu-calendare/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  },
];