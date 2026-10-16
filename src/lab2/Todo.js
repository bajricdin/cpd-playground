
import { useState } from 'react';
import { Text, View } from 'react-native';
import AddTodo from './AddTodo';
import FilterBar from './FilterBar';
import { styles } from './styles';
import TodoItem from './TodoItem';

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);

  const [filter, setFilter] = useState('all');

  function addTodo(title) {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const newTodo = {
      id: Date.now().toString(),
      title: trimmedTitle,
      done: false,
    };

    setTodos(current => [...current, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(current =>
      current.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(current =>
      current.filter(todo => todo.id !== id)
    );
  }

  const left = todos.filter(todo => !todo.done).length;

  const visibleTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>To-Do List</Text>

      <AddTodo onAdd={addTodo} />

      <Text>{left} left</Text>

      <FilterBar
        filter={filter}
        onChange={setFilter}
      />

      {todos.length === 0 ? (
        <Text style={styles.muted}>No tasks yet</Text>
      ) : (
        visibleTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))
      )}
    </View>
  );
}
