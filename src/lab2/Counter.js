
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Counter</Text>

      <Text>Count: {count}</Text>

      <View style={styles.row}>
        <Pressable
          disabled={count === 0}
          onPress={() => setCount(c => Math.max(0, c - 1))}
          style={[
            styles.button,
            { backgroundColor: count === 0 ? '#999' : '#003A6D' },
          ]}
        >
          <Text style={styles.buttonText}>−1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount(c => c + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount(0)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Like Button</Text>

      <Pressable
        onPress={() => setLiked(value => !value)}
        style={[
          styles.button,
          { backgroundColor: liked ? '#27834A' : '#003A6D' },
        ]}
      >
        <Text style={styles.buttonText}>
          {liked ? 'Liked (13)' : 'Like (12)'}
        </Text>
      </Pressable>
    </View>
  );
}
