import React, {
  ChangeEvent,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { CharacterModel } from '../../domain/models'
import {
  makeRemoteFilterCharactersByGender,
  makeRemoteFilterCharactersByName,
  makeRemoteFilterCharactersBySpecies,
  makeRemoteFilterCharactersByStatus,
  makeRemoteGetCharacters,
} from '../../main/fatories/usecases'
import useDebounce from './useDebounce'
interface CharacterContextData {
  data: CharacterModel[]
  count: number
  filterType: string
  filterValue: string
  setFilterType: (value: string) => void
  setFilterValue: (value: string) => void
  page: number
  loading: boolean
  handleChangePage: (event: ChangeEvent<unknown>, value: number) => void
}

const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData)

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CharacterModel[]>([])
  const [count, setCount] = useState<number>(0)
  const [filterType, setFilterType] = useState('Nenhum')
  const [filterValue, setFilterValue] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(filterValue, 500)
  console.log('data')

  useEffect(() => {
    getData()
  }, [debouncedSearchTerm, filterType, page])

  const getData = useCallback(async () => {
    switch (filterType) {
      case 'status':
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersByStatus()
            .perform({ page, status: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
              }
              setLoading(false)
            })
        }
        break
      case 'especie':
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersBySpecies()
            .perform({ page, species: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
              }
              setLoading(false)
            })
        }
        break
      case 'nome':
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersByName()
            .perform({ page, name: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
              }
              setLoading(false)
            })
        }
        break
      case 'Nenhum':
        setLoading(true)
        makeRemoteGetCharacters()
          .perform({ page })
          .then((data) => {
            setData(data.results)
            setCount(data.info.pages)

            setLoading(false)
          })

        break

      case 'genero':
        setLoading(true)
        makeRemoteFilterCharactersByGender()
          .perform({ page, gender: filterValue })
          .then((data) => {
            if (data) {
              setData(data.results)
              setCount(data.info.pages)
            }
            setLoading(false)
          })
        break
    }
  }, [debouncedSearchTerm, filterType, page])

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    if (filterType !== 'Nenhum' && !filterValue) {
      return
    }
    setPage(value)
  }

  return (
    <CharacterContext.Provider
      value={{
        data,
        count,
        filterType,
        filterValue,
        setFilterType,
        setFilterValue,
        page,
        loading,
        handleChangePage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacter() {
  const context = useContext(CharacterContext)
  return context
}
