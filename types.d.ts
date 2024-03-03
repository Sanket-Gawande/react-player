export interface ISong {
  title: string,
  artist: string,
  album: string,
  thumbnail: {
    large: string,
    medium: string,
    small: string
  },
  url: string,
  genre: string,
}

export interface IPlaylist {
  title: string,
  songs: ISong[]
}

export interface IMusicStore {
  playlist: IPlaylist,
  currentSong: ISong | null,
  setCurrentSong: (song: ISong) => void,
  setPlaylist: (playlist: IPlaylist) => void
}
export interface IMusicUtil {

  duration: number,
  position: number,
  repeatMode: "OFF" | "PLAYLIST" | "SONG",
  shuffle: boolean,
  songState: "PLAYING" | "PAUSED" | "BUFFERING" | "ERRORED",
  setRepeatMode: (mode: IMusicUtil['repeatMode']) => void,
  setSongState: (songState: IMusicUtil['songState']) => void,
  setShuffleMode: (mode: boolean) => void,
  setPosition: (position: number) => void,

}