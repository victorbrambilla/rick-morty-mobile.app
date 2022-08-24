import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Searchbar, TextInput, useTheme } from 'react-native-paper'
import { PaperSelect } from 'react-native-paper-select'
import { FilterTypes } from '../enums/filterTypes'
import { genders } from '../enums/gender'
import { species } from '../enums/species'
import { status } from '../enums/status'

export const Filter = () => {
  const [filterTypeValue, setFilterTypeValue] = useState('Nenhum')
  const [filterValue, setFilterValue] = useState('')
  const { colors } = useTheme()

  const handreSetFilterTypeValue = (value: string) => {
    setFilterTypeValue(value)
    setFilterValue('')
  }

  return (
    <>
      <PaperSelect
        label='Filtrar por'
        value={filterTypeValue}
        onSelection={(value: any) => {
          handreSetFilterTypeValue(value.text)
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
      {filterTypeValue !== 'Nenhum' && (
        <>
          {filterTypeValue === 'Gênero' && (
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
          {filterTypeValue === 'Espécie' && (
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
          {filterTypeValue === 'Status' && (
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
          {filterTypeValue === 'Nome' && (
            // <Searchbar
            //   inputStyle={styles.in}
            //   placeholder='Filtrar por nome'
            //   onChangeText={(text) => setFilterValue(text)}
            //   value={filterValue}
            //   style={{
            //     color: 'white',
            //     backgroundColor: colors.background,
            //   }}
            //   elevation={0}
            //   iconColor={colors.primary}
            // />
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
