import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher, {
    refreshInterval: 1000,
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Page() {
  return (
    <>
      <Profile id={124} />
      <Avatar id={123} />
    </>
  );
}

export function Profile() {
  const { user, isLoading, isError } = useUser(124);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id={123} />
    </>
  );
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load (Avatar)</div>;
  if (isLoading) return <div>loading... (Avatar) </div>;

  return <div>hello {user.name} ! (Avatar) </div>;
}
