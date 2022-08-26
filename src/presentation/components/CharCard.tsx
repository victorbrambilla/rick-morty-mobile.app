import React from 'react'
import { CharacterModel } from '../../domain/models'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface IProps {
  char: CharacterModel
}

export const CharCard = ({ char }: IProps) => {
  const navigation = useNavigation()

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: char.image }} />
      <Card.Content>
        <Title>{char.name}</Title>
        <Paragraph>Status: {char.status}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => navigation.navigate('Character' as never, { id: char.id } as never)}
          mode='contained'
        >
          Ver
        </Button>
      </Card.Actions>
    </Card>
  )
}
const styles = StyleSheet.create({
  card: {
    width: '45%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    minHeight: 200,
    maxHeight: 600,
    justifyContent: 'center',
  },
})
