import React from 'react'
import useMusicStore from './song.store'

export default function ReactMusic() {
  const { currentSong, playlist, setPlaylist: loadSongs } = useMusicStore();
  
  return (
    { currentSong, loadSongs }
  )
}
