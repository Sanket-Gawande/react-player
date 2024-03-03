import { useMemo, useEffect, useCallback } from 'react';
import useMusicStore, { useMusicUtil } from './song.store';
export default function AudioComponent() {
  const audio: HTMLAudioElement = useMemo(() => new Audio(), [])
  const { currentSong } = useMusicStore();
  const { setSongState, setPosition } = useMusicUtil();

  const onPlay = useCallback(
    () => {
      audio.play();
      setSongState("PLAYING")
    },
    []
  )

  const onTimeChange = useCallback(() => {
    setPosition(audio.currentTime)
  }, []);

  useEffect(() => {
    audio.src = currentSong?.url as string;
  }, [currentSong])

  useEffect(() => {
    audio.onplay = onPlay
    audio.ontimeupdate = onTimeChange
  }, [])
}
