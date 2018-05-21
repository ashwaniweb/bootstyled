import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default function scrollbar(props) {
  return (
    <Scrollbars
      {...props}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: '#0085bf',
          }}
        />
      )}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            right: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            cursor: 'pointer',
            backgroundColor: '#d9d9d9',
            position: 'absolute',
          }}
        />
      )}
    />
  );
}
