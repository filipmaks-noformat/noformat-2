import React from 'react';

// Define TypeScript interfaces to accurately type the props
interface VideoBlock {
  attrs: {
      name: string;
      data: {
          frist_video_embed_url: string;
          second_video_embed_url: string;
          second_video_cover_image?: number;
          cursor_label?: string;
          progress_bar?: string;
          video_sound_control?: string;
      };
      mode: string;
  };
  innerBlocks: any[];
  innerHTML: string;
  innerContent: any[];
  html_content: string;
}

const CustomTwoVideosComponent: React.FC<{ block: VideoBlock }> = ({ block }) => {
  const { data } = block.attrs;
  return (
      <div className='custom-two-videos'>
          <video controls src={data.frist_video_embed_url} style={{ width: '100%' }} />
          <video controls src={data.second_video_embed_url} style={{ width: '100%' }} />
      </div>
  );
};

export default CustomTwoVideosComponent;
