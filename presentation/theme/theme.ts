import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#03C03C',
    secondary: '#653496',
  },
}
