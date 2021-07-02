# ToDo


By default running `wamps` should look for `mps.yaml` before `package.json`


---

Dupe check for script names and commands, something like:

```js
const allCommandsMap: Record<string, number> = {};

for (const scriptName in scriptsObj) {
  if (!transformed[scriptName]) {
    transformed[scriptName] = {
      command: scriptsObj[scriptName],
      description: ''
    };
  }

  // Why not do a dupe check for script names and script commands
  if (!allCommandsMap[scriptsObj[scriptName]]) {
    allCommandsMap[scriptsObj[scriptName]] = 0;
  }
  if (allCommandsMap[scriptsObj[scriptName]]) {
    console.warn(
      `Warning: you might have a duplicate script command. This command: ${scriptsObj[scriptName]} appeared more than once.`
    );
  }
  if (transformed[scriptName]) {
    console.warn(
      `Warning: you might have a duplicate script with the name of: ${scriptName}`
    );
  }
}
```
