import { getTodos, postTodo } from './my-api';
import React from 'react';
import { useQueryClient, useQuery, useMutation } from 'react-query';

export default function QuickStart() {
  const queryClient = useQueryClient();
  const query = useQuery('todos', getTodos);
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  if (query.isLoading) {
    return 'Loading...';
  }
  if (query.error) {
    return 'Error...';
  }

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'learn React-Query',
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
