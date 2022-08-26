import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, useTheme } from 'react-native-paper'
import { PaperSelect } from 'react-native-paper-select'
import { FilterTypes } from '../enums/filterTypes'
import { genders } from '../enums/gender'
import { species } from '../enums/species'
import { status } from '../enums/status'
import { useCharacter } from '../hooks/useCharacter'

export const Filter = () => {
  const { filterType, filterValue, setFilterType, setFilterValue } = useCharacter()
  const { colors } = useTheme()

  const handleSetFilterTypeValue = (value: string) => {
    if (value === 'Nenhum') {
      setFilterValue('')
    }
    setFilterType(value)
  }

  return (
    <>
      <PaperSelect
        label='Filtrar por'
        value={filterType}
        onSelection={(value: any) => {
          handleSetFilterTypeValue(value.text)
        }}
        arrayList={[...FilterTypes]}
        multiEnable={false}
        textInputColor={colors.secondary}
        textInputBackgroundColor={colors.background}
        dialogButtonLabelStyle={{ color: colors.primary }}
        searchStyle={{ iconColor: colors.primary }}
        dialogStyle={{ backgroundColor: colors.background }}
        checkboxLabelStyle={{ color: 'white' }}
        checkboxUncheckedColor={colors.primary}
        checkboxColor={colors.primary}
        underlineColor={colors.primary}
        activeUnderlineColor={colors.primary}
        dialogTitleStyle={{ color: 'white' }}
        textInputMode='flat'
        selectedArrayList={[]}
        searchPlaceholder='Pesquisar'
        modalCloseButtonText='Fechar'
        modalDoneButtonText='Filtrar'
        errorText={''}
      />
      {filterType !== 'Nenhum' && (
        <>
          {filterType === 'Gênero' && (
            <PaperSelect
              label='Filtrar por gênero'
              value={filterValue}
              onSelection={(value: any) => {
                setFilterValue(value.text)
              }}
              arrayList={[...genders]}
              multiEnable={false}
              textInputColor={colors.secondary}
              textInputBackgroundColor={colors.background}
              dialogButtonLabelStyle={{ color: colors.primary }}
              searchStyle={{ iconColor: colors.primary }}
              dialogStyle={{ backgroundColor: colors.background }}
              checkboxLabelStyle={{ color: 'white' }}
              checkboxUncheckedColor={colors.primary}
              checkboxColor={colors.primary}
              underlineColor={colors.primary}
              activeUnderlineColor={colors.primary}
              dialogTitleStyle={{ color: 'white' }}
              textInputMode='flat'
              selectedArrayList={[]}
              searchPlaceholder='Pesquisar'
              modalCloseButtonText='Fechar'
              modalDoneButtonText='Filtrar'
              errorText={''}
            />
          )}
          {filterType === 'Espécie' && (
            <PaperSelect
              label='Filtrar por espécie'
              value={filterValue}
              onSelection={(value: any) => {
                setFilterValue(value.text)
              }}
              arrayList={[...species]}
              multiEnable={false}
              textInputColor={colors.secondary}
              textInputBackgroundColor={colors.background}
              dialogButtonLabelStyle={{ color: colors.primary }}
              searchStyle={{ iconColor: colors.primary }}
              dialogStyle={{ backgroundColor: colors.background }}
              checkboxLabelStyle={{ color: 'white' }}
              checkboxUncheckedColor={colors.primary}
              checkboxColor={colors.primary}
              underlineColor={colors.primary}
              activeUnderlineColor={colors.primary}
              dialogTitleStyle={{ color: 'white' }}
              textInputMode='flat'
              selectedArrayList={[]}
              searchPlaceholder='Pesquisar'
              modalCloseButtonText='Fechar'
              modalDoneButtonText='Filtrar'
              errorText={''}
            />
          )}
          {filterType === 'Status' && (
            <PaperSelect
              label='Filtrar por status'
              value={filterValue}
              onSelection={(value: any) => {
                setFilterValue(value.text)
              }}
              arrayList={[...status]}
              multiEnable={false}
              textInputColor={colors.secondary}
              textInputBackgroundColor={colors.background}
              dialogButtonLabelStyle={{ color: colors.primary }}
              searchStyle={{ iconColor: colors.primary }}
              dialogStyle={{ backgroundColor: colors.background }}
              checkboxLabelStyle={{ color: 'white' }}
              checkboxUncheckedColor={colors.primary}
              checkboxColor={colors.primary}
              underlineColor={colors.primary}
              activeUnderlineColor={colors.primary}
              dialogTitleStyle={{ color: 'white' }}
              textInputMode='flat'
              selectedArrayList={[]}
              searchPlaceholder='Pesquisar'
              modalCloseButtonText='Fechar'
              modalDoneButtonText='Filtrar'
              errorText={''}
            />
          )}
          {filterType === 'Nome' && (
            <TextInput
              label='Filtrar por nome'
              value={filterValue}
              onChangeText={(text) => setFilterValue(text)}
              style={{
                backgroundColor: colors.background,
                color: colors.secondary,
                borderBottomWidth: 1,
                borderBottomColor: colors.primary,
              }}
              mode='flat'
              right={<TextInput.Icon name='magnify' color={colors.primary} />}
            />
          )}
        </>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  in: {
    color: 'white',
  },
})
