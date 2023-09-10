import React from 'react';
import Masonry from "react-responsive-masonry"
import {Image} from 'antd';

const MasonryLayout = ({images}: { images: { link: string }[] | [] }) => {
  return (
    <Masonry columnsCount={5} gutter="10px">
      {images.map((image, i) => (
        <Image
          key={i}
          style={{width: "100%", display: "block"}}
          src={image.link}
        />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
