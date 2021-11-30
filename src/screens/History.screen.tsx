import React from 'react';
import { ScrollView, View } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from './components/MoodItemRow';

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <ScrollView>
      <View>
        {appContext.moodList.map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
      </View>
    </ScrollView>
  );
};
