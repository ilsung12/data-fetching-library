import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { Avatar } from './profile';

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}

export default function Cache() {
  return (
    <SWRConfig
      value={{ refreshInterval: 1000, provider: localStorageProvider }}
    >
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  const { cache, mutate } = useSWRConfig();

  return (
    <div>
      <Avatar id={1212} />
      <button
        onClick={() => {
          mutate('/api/user/1212');
          console.log(`check: ${JSON.stringify(cache.get('/api/user/1212'))}`);
        }}
      >
        check
      </button>
    </div>
  );
};
