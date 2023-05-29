import { FC } from 'react';
import CharactersList from './charactersList.component';

export type CharactersComponentProps = {
  ids: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ ids }: CharactersComponentProps) => (
  <div className={'characters'}>
    <CharactersList ids={ids}/>
  </div>
)


export default CharactersComponent;
