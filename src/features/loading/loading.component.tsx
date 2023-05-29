import { FC, useContext } from 'react';
import { LanguageContext } from 'features/language';

const LoadingComponent: FC = () => {

  const { translate } = useContext(LanguageContext);  
  return <div>{translate('loading')}...</div>;
};

export default LoadingComponent;
