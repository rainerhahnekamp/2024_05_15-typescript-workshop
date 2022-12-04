# TypeScript Workshop - Start

1. Study `tsconfig.json`, its properties along values and description
2. Study the files in the `app` folder.
3. Run webpack with `npm run serve`.
4. Open your browser and navigate to `http://localhost:9000`. You should see an output in the console.
5. The current `tsconfig` transpiles to ES5. `const` and `let` has been introduced in ES6. Compile TypeScript via `tsc` and verify that the JavaScript file contains `var`.
6. Set target in `tsconfig.json` to `es6`, recompile again and verify that the JavaScript contains now `const` and `let`.
