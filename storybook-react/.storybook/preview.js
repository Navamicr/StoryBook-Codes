// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     options: {
//       // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
//       storySort: (a, b) =>
//         a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
//     },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
import React from 'react'
import '@storybook/addon-console'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { withConsole } from '@storybook/addon-console'
const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})


export const decorators=[
  (story)=>(
    <ChakraBaseProvider theme={theme}>
      
      {story()}
    </ChakraBaseProvider>
  )
  
]


