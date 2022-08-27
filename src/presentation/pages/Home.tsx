import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper'
import { CharCard } from '../components/CharCard'
import { Filter } from '../components/Filter'
import PaginationDot from 'react-native-animated-pagination-dot'

import { useCharacter } from '../hooks/useCharacter'

export const Home = () => {
  const { data, loading, page, count, handleChangePage } = useCharacter()
  const { colors } = useTheme()
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <Filter />
        {loading ? (
          <View style={styles.containerLoad}>
            <ActivityIndicator animating={true} color='white' size='large' />
          </View>
        ) : (
          <ScrollView
            indicatorStyle={colors.primary}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {data.map((char) => (
              <CharCard key={char.id} char={char} />
            ))}
          </ScrollView>
        )}
      </View>
      <View style={styles.containerPagination}>
        {page > 1 && (
          <IconButton
            icon='arrow-left'
            iconColor={colors.primary}
            size={20}
            onPress={() => handleChangePage('prev', page)}
          />
        )}

        <PaginationDot activeDotColor={colors.primary} curPage={page - 1} maxPage={count} />

        {page !== count && (
          <IconButton
            icon='arrow-right'
            iconColor={colors.primary}
            size={20}
            onPress={() => handleChangePage('next', page)}
          />
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 50,
  },
  containerLoad: {
    height: '80%',
    justifyContent: 'center',
  },
  containerPagination: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#ffffff',
  },
})
