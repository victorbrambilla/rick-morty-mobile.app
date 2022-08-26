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
  handleChangePage: (type: string, currPage: number) => void
}

const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData)

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CharacterModel[]>([])
  const [count, setCount] = useState<number>(0)
  const [filterType, setFilterType] = useState('Nenhum')
  const [filterValue, setFilterValue] = useState('')
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(filterValue, 500)

  useEffect(() => {
    getData()
  }, [debouncedSearchTerm, page])

  const getData = useCallback(async () => {
    switch (filterType) {
      case 'Status':
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
      case 'Espécie':
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
      case 'Nome':
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

      case 'Gênero':
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
  }, [debouncedSearchTerm, filterType, page, filterValue])

  const handleChangePage = (type: string, currPage: number) => {
    if (filterType !== 'Nenhum' && !filterValue) {
      return
    }
    console.log('teste', currPage)
    if (type === 'next') {
      if (currPage <= count) {
        setPage(currPage + 1)
      }
    } else {
      if (currPage !== 1) {
        setPage(currPage - 1)
      }
    }
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
