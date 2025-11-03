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
  "72": "/sound/Background_morning.mp3",
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
  "1-4" : { 
    soundEffect : {
      sound:"/sound/sound_1-4.mp3",
      loop: false,
    }
  },
  "Q2" : { 
    soundEffect : {
      sound:"/sound/sound_Q2.mp3",
      loop: false,
      volume:40
    }
  },  
  "Q3" : { 
    soundEffect : {
      sound:"/sound/sound_Q3.mp3",
      loop: false,
      // volume:40
    }
  },
  "3-3" : { 
    soundEffect : {
      sound:"/sound/sound_3-3.mp3",
      loop: false,
      // volume:40
    }
  },
  "34-4" : { 
    soundEffect : {
      sound:"/sound/sound_3-4.mp3",
      loop: false,
      // volume:40
    }
  },
  "4-2" : { 
    soundEffect : {
      sound:"/sound/sound_4-2.mp3",
      loop: false,
      // volume:40
    }
  },
  "41-3" : { 
    soundEffect : {
      sound:"/sound/sound_4-3.mp3",
      loop: false,
      // volume:40
    }
  },
  "41-4" : { 
    soundEffect : {
      sound:"/sound/sound_41-4.mp3",
      loop: false,
      volume:50
    }
  },
  "Q9" : { 
    soundEffect : {
      sound:"/sound/sound_Q9.mp3",
      loop: false,
      volume:50
    }
  },
  "5-2" : { 
    soundEffect : {
      sound:"/sound/sound_5-2.mp3",
      loop: false,
      volume:50
    }
  },
  "Q11" : { 
    soundEffect : {
      sound:"/sound/sound_Q11.mp3",
      loop: false,
      volume:50
    }
  },
  "7-1" : { 
    soundEffect : {
      sound:"/sound/sound_7-1.mp3",
      loop: false,
      volume:50
    }
  },
  "9-1" : { 
    soundEffect : {
      sound:"/sound/sound_9-1.mp3",
      loop: false,
      volume:50
    }
  },
  "9-2" : { 
    soundEffect : {
      sound:"/sound/sound_5-2.mp3",
      loop: false,
      volume:20
    }
  },
  
};

  