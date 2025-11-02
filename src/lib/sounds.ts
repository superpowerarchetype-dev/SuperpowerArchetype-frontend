export const scenePageMap = {
  "1": "/sound/Background_tension.mp3",
  "r": "/sound/Background_maintheme.mp3",
  "2": "/sound/Background_tension.mp3",
  "Q1": "/sound/Background_tension.mp3",
  "Q2": "/sound/Background_tension.mp3",
  "Q3": "/sound/Background_tension.mp3",
  "Q4": "/sound/Background_tension.mp3",
  "3": "/sound/Background_tension.mp3",
  "4": "/sound/Background_cavedrop.mp3",
  "Q5": "/sound/Background_cavedrop.mp3",
  "Q6": "/sound/Background_cavedrop.mp3",
  "Q7": "/sound/Background_cavedrop.mp3",
  "Q8": "/sound/Background_maintheme.mp3",
  "41": "/sound/Background_maintheme.mp3",
  "Q9": "/sound/Background_maintheme.mp3",
  "Q10": "/sound/Background_maintheme.mp3",
  "Q11": "/sound/Background_maintheme.mp3",
  "5": "/sound/Background_maintheme.mp3",
  "7": "/sound/Background_morning.mp3",
  "Q12": "/sound/Background_morning.mp3",
  "Q13": "/sound/Background_morning.mp3",
  "8": "/sound/Background_morning.mp3",
  "9": "/sound/Background_morning.mp3",
  "10": "/sound/Background_morning.mp3",
  "pre": "/sound/Background_maintheme.mp3",
  "endcard": "/sound/Background_maintheme.mp3",
    
    // "2": "/sound/sadNostalgic.mp3",
    // "4": "/sound/sadNostalgic.mp3",
  } as const;
  
  export const soundPageMap: Record<
    string,
    {
      soundEffect?: {
        sound: string;
        loop?: boolean;
        volume?: number;
      };
      backgroundVolume?: number;
    }
  > = {
    
  };
  