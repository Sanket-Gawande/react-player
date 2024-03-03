import { StoreApi, UseBoundStore, create } from "zustand";
import { IMusicStore, IMusicUtil, IPlaylist, ISong } from "./types";

const useMusicStore = create<IMusicStore>((set) => ({
  currentSong: null,
  playlist: { title: '', songs: [] },
  setCurrentSong: (song: ISong) => set(state => ({ ...state, currentSong: song })),
  setPlaylist: (playlist: IPlaylist) => set(state => ({ ...state, playlist })),
}));

export default useMusicStore;

export const useMusicUtil = create<IMusicUtil>(set => ({
  duration: 0,
  position: 0,
  repeatMode: "OFF",
  shuffle: false,
  songState: "BUFFERING",
  setRepeatMode: (mode: IMusicUtil['repeatMode']) => set(state => ({ ...state, repeatMode: mode })),
  setSongState: (songState: IMusicUtil['songState']) => set(state => ({ ...state, songState: songState })),
  setShuffleMode: (mode: boolean) => set(state => ({ ...state, shuffle: mode })),
  setPosition: (position: number) => set(state => ({ ...state, position }))
}));
