import { type FC, type ReactNode, type SetStateAction, type Dispatch, createContext } from 'react'
import Language from "../language.types";
import { useLanguage } from '../hooks/useLanguage';

interface LanguageContextType {
  language: Language
  setLanguage: Dispatch<SetStateAction<Language>>
  translate: (key: string) => string
}

export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageProvider: FC<{ children: ReactNode }> = ({children}) => {
  const { language, setLanguage, translate } = useLanguage()

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  )
}