import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title, useTheme } from 'react-native-paper'
import { CharacterModel } from '../../domain/models'
import { makeRemoteGetCharacterById } from '../../main/fatories/usecases'

interface Params {
  id: number
}

export const Character = () => {
  const route = useRoute()
  const [char, setChar] = React.useState({} as CharacterModel)
  const { id } = route.params as Params
  const { colors } = useTheme()

  React.useEffect(() => {
    makeRemoteGetCharacterById()
      .perform({
        id,
      })
      .then((res) => setChar(res))
  }, [])
  return (
    <View style={styles.bg}>
      <Card style={styles.cardBg}>
        <Card.Cover style={styles.cardImg} source={{ uri: char.image }} />
        <Card.Content
          style={{
            backgroundColor: colors.background,
            height: 300,
          }}
        >
          <Title style={styles.cardTitle}>{char.name}</Title>
          <View style={styles.containerAtt}>
            <Paragraph style={styles.att}>
              <Text style={styles.itemText}>Status:</Text> {char.status}
            </Paragraph>
            <Paragraph style={styles.att}>
              <Text style={styles.itemText}>Espécie:</Text> {char.species}
            </Paragraph>
            <Paragraph style={styles.att}>
              <Text style={styles.itemText}>Gênero:</Text> {char.gender}
            </Paragraph>
            <Paragraph style={styles.att}>
              <Text style={styles.itemText}>Origem:</Text> {char.origin?.name}
            </Paragraph>
            <Paragraph style={styles.att}>
              <Text style={styles.itemText}>Última Localização:</Text> {char.location?.name}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  cardBg: {
    backgroundColor: '#000000',
  },
  cardTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 20,
  },
  cardImg: {
    borderRadius: 300,

    width: '100%',
    height: 300,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#ffffff',
  },
  containerAtt: {
    marginVertical: 10,
    height: 300,
  },
  att: {
    fontSize: 15,
    marginVertical: 5,
    lineHeight: 20,
    color: 'white',
  },
  itemText: {
    fontWeight: 'bold',
    color: '#03C03C',
    fontSize: 20,
    marginVertical: 10,
  },
})
