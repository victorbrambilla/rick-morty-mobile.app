import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Home } from './src/presentation/pages/Home';

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


export default function App() {
  return (
      <Home/>
  );
}

