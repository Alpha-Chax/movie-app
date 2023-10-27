import React from 'react';
import { View } from 'react-native';

const AppLayout = ({ children }) => {
  return (
    <View className="flex-1 bg-slate-700">
      {children}
    </View>
  );
};

export default AppLayout;
