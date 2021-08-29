import React, { useState, useRef, useEffect } from 'react'

const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef()
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval