import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient()


function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
   
  );
}


function Example() {
  const {data, isLoading } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
      res.json()
    )
  )

  if (isLoading) return <h1>Loading...</h1>

  return (
    data.map((item: any) => <div>
    {/* <h1>{JSON.stringify(item.userId)}</h1> */}
    <p>{JSON.stringify(item?.id)}</p>
    <strong>👀 {JSON.stringify(item.title)}</strong>{' '}
    <strong>✨ {JSON.stringify(item.completed)}</strong>{' '}
  </div>))
  
}
export default App;
