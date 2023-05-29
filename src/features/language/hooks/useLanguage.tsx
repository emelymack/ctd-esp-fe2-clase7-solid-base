import {useState, useEffect, type SetStateAction, type Dispatch} from 'react'
import Language from '../language.types'
import esTranslations from 'data/i18n.es'
import enTranslations from 'data/i18n.en'
import ptTranslations from 'data/i18n.pt'

const languagesMap = {
  SPANISH: esTranslations,
  ENGLISH: enTranslations,
  PORTUGUESE: ptTranslations
}

export const useLanguage = (): {
    language: Language,
    setLanguage: Dispatch<SetStateAction<Language>>,
    translate: (lang: string) => string
  }  => {
  const [language, setLanguage] = useState<Language>('ENGLISH')

  const translate = (key:string) => {    
    if (Object.keys(languagesMap).includes(language)){            
      return languagesMap[language][key]
    }
    return key
  }

  return { language, setLanguage, translate }
}
