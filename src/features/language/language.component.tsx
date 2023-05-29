import { FC, useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';

const LanguageComponent: FC = () => {
  const { language, setLanguage, translate } = useContext(LanguageContext);
  return (
    <div className={'language'}>
      <button
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {translate('language.spanish')}
      </button>
      <button
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {translate('language.english')}
      </button>
      <button
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {translate('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
