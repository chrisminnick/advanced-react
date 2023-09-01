import React from 'react';
import { socket } from './socket';

export function ConnectionManager({ isConnected }) {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      {isConnected ? (
        <button className="connectionButton" onClick={disconnect}>
          Disconnect
        </button>
      ) : (
        <button className="connectionButton" onClick={connect}>
          Connect
        </button>
      )}
    </>
  );
}

export default ConnectionManager;
