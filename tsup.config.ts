import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./src/index.ts"],
    platform: "neutral",
    dts: true,
    format: ["esm", "cjs"],
    outDir: "dist",
  },
]);
