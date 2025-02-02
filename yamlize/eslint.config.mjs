import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = compat.config({
  extends: ["next/core-web-vitals"], // This should be at the root level of the config
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      // No need to add 'extends' here as it's already in the root level
    },
  ],
});

export default eslintConfig;
