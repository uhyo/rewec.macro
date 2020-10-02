import { createMacro } from "babel-plugin-macros";

// `source` is not in @types/babel-plugin-macros :(
// @ts-expect-error
export = createMacro(({ references, state, babel, source }) => {
  const recFuncReferences = [...(references.rec || [])];
  const infiniteFuncReferences = [
    ...(references.default || []),
    ...(references.infinite || []),
  ];
});
