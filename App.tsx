import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { CharacterProvider } from './src/presentation/hooks/useCharacter'
import { Home } from './src/presentation/pages/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Character } from './src/presentation/pages/Character'
import { Header } from './src/presentation/components/Header'
import { theme } from './src/presentation/theme/theme'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <CharacterProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props: NativeStackHeaderProps) => <Header props={props} />,
              animation: 'slide_from_right',
              animationDuration: 0,
            }}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Character' component={Character} />
          </Stack.Navigator>
        </NavigationContainer>
      </CharacterProvider>
    </PaperProvider>
  )
}
