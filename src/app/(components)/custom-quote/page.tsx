import React from 'react';

// Define TypeScript interfaces to accurately type the props
interface QuoteBlock {
  attrs: {
      name: string;
      data: {
          quote_text: string;
          quote_author: string;
      };
      mode: string;
  };
  innerBlocks: any[];  // Define more specifically if needed
  innerHTML: string;
  innerContent: any[];  // Define more specifically if needed
  html_content: string;
}

const CustomQuoteComponent: React.FC<{ block: QuoteBlock }> = ({ block }) => {
  const { data } = block.attrs;
  return (
      <blockquote className='custom-quote'>
          "{data.quote_text}" - {data.quote_author}
      </blockquote>
  );
};

export default CustomQuoteComponent;
