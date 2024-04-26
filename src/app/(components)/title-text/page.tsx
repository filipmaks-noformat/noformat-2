import React from 'react';

interface BlockProps {
  attrs: {
    data: {
      block_title: string;
      block_content: string;
    };
  };
}

const TitleTextComponent: React.FC<{ block: BlockProps }> = ({ block }) => {
  return (
    <div className='title-text'>
      <h1>{block.attrs.data.block_title}</h1>
      <p>{block.attrs.data.block_content}</p>
    </div>
  );
};

export default TitleTextComponent;
