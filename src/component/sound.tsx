"use client";

import { usePathname } from "next/navigation";
import { scenePageMap, soundPageMap } from "~/lib/sounds";
import { createRef, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import AudioPlayer from "./audio_player";

const Sounds = () => {
  const path = usePathname();
  const page = path.split("/")[1]!;
  const defaultBackingTrackVolume = 0.75;
  const defaultSoundEffectVolume = 0.3;
  const scene = page.split("-")[0] as keyof typeof scenePageMap;

  const [backingTrackSound, setBackingTrackSound] = useState<string>();
  const [backingTrackVolume, setBackingTrackVolume] = useState<number>(
    defaultBackingTrackVolume,
  );
  const backingTrackRef = createRef<ReactHowler>();
  const soundEffectRef = createRef<ReactHowler>();
  const [soundEffect, setSoundEffect] = useState<{
    sound: string;
    loop?: boolean;
    volume?: number;
  }>();

  const fadeDuration = 1000;
  const fadeDurationSFX = 10;

  useEffect(() => {
    const nextSound = scenePageMap[scene];

    if (nextSound !== backingTrackSound) {
      backingTrackRef.current?.howler.fade(backingTrackVolume, 0, fadeDuration);
      setTimeout(() => {
        setBackingTrackSound(nextSound);
      }, fadeDuration);
    }
    if (backingTrackSound === "/sound/Background_maintheme.mp3") {
      setTimeout(() => {
        setBackingTrackVolume(0.1);
      }, fadeDuration);
    }
  }, [scene]);

  useEffect(() => {
    let nextSoundEffect: typeof soundEffect;
    let nextBackgroundVolume: number | undefined;

    if (page in soundPageMap) {
      nextSoundEffect = soundPageMap[page]?.soundEffect;
      nextBackgroundVolume = soundPageMap[page]?.backgroundVolume;
    }

    if (nextSoundEffect !== soundEffect) {
      if (soundEffectRef.current?.howler.playing()) {
        soundEffectRef.current?.howler.fade(
          soundEffectRef.current?.howler.volume() ?? defaultSoundEffectVolume,
          0,
          fadeDurationSFX,
        );
        setTimeout(() => {
          setSoundEffect(nextSoundEffect);
        }, fadeDurationSFX);
      } else {
        setSoundEffect(nextSoundEffect);
      }
    }

    // 👇 เพิ่มส่วนนี้: ปรับ volume ถ้าเป็น maintheme
    let finalVolume = nextBackgroundVolume ?? defaultBackingTrackVolume;
    if (backingTrackSound === "/sound/Background_maintheme.mp3") {
      finalVolume = 0.1;
    }

    if (
      !!finalVolume ||
      backingTrackRef.current?.howler.volume() !== defaultBackingTrackVolume
    ) {
      backingTrackRef.current?.howler.fade(
        backingTrackVolume,
        finalVolume,
        fadeDuration,
      );
      setTimeout(() => {
        setBackingTrackVolume(finalVolume);
      }, fadeDuration);
    }
  }, [page, backingTrackSound]); // 👈 เพิ่ม backingTrackSound ใน dependency

  return (
    <>
      {backingTrackSound && (
        <AudioPlayer
          src={backingTrackSound}
          volume={backingTrackSound === "/sound/Background_maintheme.mp3" 
            ? 0.1 : backingTrackVolume}
          loop
          preload
          ref={backingTrackRef}
        />
      )}
      {soundEffect && (
        <AudioPlayer
          key={soundEffect.sound}
          src={soundEffect.sound}
          loop={soundEffect.loop}
          volume={soundEffect.volume ?? defaultSoundEffectVolume}
          ref={soundEffectRef}
        />
      )}
    </>
  );
};

export default Sounds;
