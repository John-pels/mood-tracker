export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type moodOptionWithTimestamp = {
  mood: MoodOptionType;
  timestamp: number;
};
