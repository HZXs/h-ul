const allAssembly = require.context("../packages", true, /\/src$/);
const lib = [];
for (let row of allAssembly.keys()) {
  const name = allAssembly(row).default;
  lib.push(name);
}
export const components = [...lib];
