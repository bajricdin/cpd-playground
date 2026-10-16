
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <View style={[styles.row, { alignItems: 'center' }]}>
      <Pressable
        onPress={() => onToggle(todo.id)}
        style={{ flex: 1, paddingVertical: 8 }}
      >
        <Text
          style={{
            textDecorationLine: todo.done
              ? 'line-through'
              : 'none',
            color: todo.done ? '#5B6475' : '#111827',
          }}
        >
          {todo.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onRemove(todo.id)}
        style={[styles.button, { backgroundColor: '#9B3030' }]}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );
}
