import React from 'react';

// Define a TypeScript interface for Block
interface Block {
  blockName: string;
  attrs: {
    textAlign?: string;
    level?: number;
    style?: {
      elements?: {
        link?: {
          color?: {
            text?: string;
          }
        }
      }
    };
    backgroundColor?: string;
    textColor?: string;
  };
  innerHTML: string;
  innerBlocks: any[];
  innerContent: any[];
}

const NativeComponent: React.FC<{ block: Block }> = ({ block }) => {
  return (
    <div className='native-block' dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  );
};

export default NativeComponent;
