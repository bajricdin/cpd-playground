
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Done', value: 'done' },
];

export default function FilterBar({ filter, onChange }) {
  return (
    <View style={styles.row}>
      {filters.map(item => {
        const selected = filter === item.value;

        return (
          <Pressable
            key={item.value}
            onPress={() => onChange(item.value)}
            style={[
              styles.button,
              {
                backgroundColor: selected ? '#27834A' : '#003A6D',
                flex: 1,
              },
            ]}
          >
            <Text style={styles.buttonText}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
