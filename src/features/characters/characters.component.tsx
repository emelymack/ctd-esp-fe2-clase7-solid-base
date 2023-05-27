import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';
import { Card } from 'features/card';
import CardBody from 'features/card/card-body.component';
import { FollowingButtonComponent } from 'features/following/button';
import Character from 'features/characters/characters.types';
import CharactersList from './charactersList.component';

export type CharactersComponentProps = {
  ids: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ ids }: CharactersComponentProps) => {
  // const { data: characters, error, isLoading } = useGetCharactersQuery({ ids });
  // const dispatch = useAppDispatch();
  // const followingIds = useAppSelector((state) => state.following.followingIds);

  // if (isLoading) return <div>Loading characters...</div>;
  // if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  // const charactersArray = Array.isArray(characters) ? characters : [characters];

  // const onToggleFavorite = (character: Character, setFav: boolean) => {
  //   if (setFav) {
  //     dispatch(addCharacterToFollowingList(character.id));
  //   } else {
  //     dispatch(removeCharacterToFollowingList(character.id));
  //   }
  // };

  return (
    <div className={'characters'}>
      <CharactersList ids={ids}/>
    </div>
  );
};

export default CharactersComponent;
