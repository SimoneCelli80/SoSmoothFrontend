import React from 'react';

function KanjiSequence() {
  const elements = ['一', '二', '三', '四'];

  return (
    <div className="flex space-x-4 font-trainOne text-smoothGrey">
      {elements.map((element, index) => (
        <div
          key={index}
          className="text-6xl animate-fade-in-out"
          style={{
            animationDelay: `${index * 1}s`
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
}

export default KanjiSequence;
