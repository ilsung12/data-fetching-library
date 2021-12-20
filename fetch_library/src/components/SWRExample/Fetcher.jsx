import axios from 'axios';
import React from 'react';
import { SWRConfig } from 'swr';
import useSWR from 'swr';

export default function Fetcher() {
  return (
    <div>
      <SWRConfig
        value={{
          fetcher: (...args) => axios.get(...args).then((res) => res),
        }}
      >
        <Page />
      </SWRConfig>
    </div>
  );
}

const Page = () => {
  const { data, error } = useSWR('/api/user/123', {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      console.log(JSON.stringify(error));
      if (error.message.includes(404)) {
        alert(404);
        return;
      }
      if (retryCount > 3) {
        return;
      }
      setTimeout(() => revalidate({ retryCount }), 1000);
    },
  });
  if (error) {
    return <div>error...</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return <div>{data.name}</div>;
};
