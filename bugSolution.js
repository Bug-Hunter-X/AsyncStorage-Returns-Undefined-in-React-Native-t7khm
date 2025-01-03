```javascript
// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        if (value !== null) {
          setData(value);
        }
      } catch (e) {
        console.error('Failed to fetch data:', e);
      }
    };
    getData();
  }, []);

  return (
    <View>
      {data !== null ? (
        <Text>Data: {data}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;
```