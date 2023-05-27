import Character from "./characters.types";
import { addCharacterToFollowingList, removeCharacterToFollowingList } from "features/following/following.slices";
import { Dispatch } from "@reduxjs/toolkit";

export const onToggleFavorite = (character: Character, setFav: boolean, dispatch: Dispatch) => {
  if (setFav) {
    dispatch(addCharacterToFollowingList(character.id));
  } else {
    dispatch(removeCharacterToFollowingList(character.id));
  }
};