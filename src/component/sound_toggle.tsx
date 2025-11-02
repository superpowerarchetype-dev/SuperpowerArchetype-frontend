"use client";

import { useSoundStore } from "~/store/sound";
import { Volume2, VolumeX } from "lucide-react";

type Props = {};

const SoundToggle = (props: Props) => {
  const { toggle, isPlaying } = useSoundStore();
  return (
    <div
      className="h-[0px] w-auto rounded-[8px] p-2 text-accent"
    >
        
      
    </div>
  );
};

export default SoundToggle;
