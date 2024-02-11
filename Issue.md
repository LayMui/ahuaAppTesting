To reproduce, 
run yarn test -u
```
yarn test -u
yarn run v1.22.21
$ jest -u
 FAIL  __tests__/App.test.tsx
  ● Test suite failed to run

    Invariant Violation: TurboModuleRegistry.getEnforcing(...): 'RNGestureHandlerModule' could not be found. Verify that a module by this name is registered in the native binary.Bridgeless mode: false. TurboModule interop: false. Modules loaded: {"NativeModules":[],"TurboModules":[],"NotFound":["RNGestureHandlerModule"]}

      3 | import testProperties from "./utils/testProperties";
      4 | // import { Button } from '@yaradigitallabs/ahua-react-native';
    > 5 | import { GestureHandlerRootView } from 'react-native-gesture-handler';
        | ^
      6 |
      7 |
      8 |

      at invariant (node_modules/invariant/invariant.js:40:15)
      at Object.getEnforcing (node_modules/react-native/Libraries/TurboModule/TurboModuleRegistry.js:87:12)
      at Object.getEnforcing (node_modules/react-native-gesture-handler/lib/commonjs/specs/NativeRNGestureHandlerModule.ts:26:36)
      at Object.<anonymous> (node_modules/react-native-gesture-handler/lib/commonjs/RNGestureHandlerModule.ts:4:1)
      at Object.<anonymous> (node_modules/react-native-gesture-handler/lib/commonjs/init.ts:2:1)
      at Object.<anonymous> (node_modules/react-native-gesture-handler/lib/commonjs/index.ts:1:1)
      at Object.require (App.tsx:5:1)
      at Object.require (__tests__/App.test.tsx:7:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        3.594 s, estimated 11 s
Ran all test suites.
error Command failed with exit code 1.
```
