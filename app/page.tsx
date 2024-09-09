'use client';

import { useEffect } from 'react';

export default function Page() {
  console.log(window);

  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <>
      <details open={false} onToggle={() => console.log('not open')}>
        <summary>test</summary>
      </details>

      <details open={false} onToggle={() => console.log('open false')}>
        <summary>test</summary>
      </details>

      <details open onToggle={() => console.log('open')}>
        <summary>test</summary>
      </details>

      <details open={true} onToggle={() => console.log('open true')}>
        <summary>test</summary>
      </details>
    </>
  );
}
