import { forwardRef, useRef } from "react";
import ReactHowler from "react-howler";
import { useSoundStore } from "~/store/sound";

// Infer props from ReactHowler
type AudioPlayerProps = React.ComponentProps<typeof ReactHowler>;
type Ref = ReactHowler;

const AudioPlayer = forwardRef<Ref, AudioPlayerProps>((props, ref) => {
  const { isPlaying } = useSoundStore();
  const internalRef = useRef<ReactHowler>(null);

  // Forward ref manually
  if (ref) {
    if (typeof ref === "function") {
      ref(internalRef.current);
    } else {
      ref.current = internalRef.current;
    }
  }

  return (
    <ReactHowler
      playing={isPlaying}
      {...props}
      ref={internalRef}
      onPlay={(soundId) => {
        if (props.onPlay) props.onPlay(soundId);
        internalRef.current?.howler.fade(0, props.volume ?? 0.75, 1000);
      }}
    />
  );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
