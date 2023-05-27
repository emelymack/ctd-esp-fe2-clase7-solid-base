import React, { FC } from 'react'
import { useGetCharactersQuery } from './characters.endpoints';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Card } from 'features/card';
import CardBody from 'features/card/card-body.component';
import { FollowingButtonComponent } from 'features/following/button';
import { onToggleFavorite } from './toggleFavorite';

interface CharacterListProps {
  ids: number[];
}

const CharactersList: FC<CharacterListProps> = ({ids}: CharacterListProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids });
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <>
      {charactersArray.map((character) => (
        <Card key={character.id}>
          <Card.Image>
            <img src={character.image} alt={character.name} />
          </Card.Image>
          <CardBody>
            <span>{character.name}</span>
            <FollowingButtonComponent
              isFav={followingIds.indexOf(character.id) >= 0}
              onToggleFavorite={(setFav) => onToggleFavorite(character, setFav, dispatch)}
            />
          </CardBody>
        </Card>
      ))}
    </>
  )
}

export default CharactersList