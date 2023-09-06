import React from 'react';
import Masonry from "react-responsive-masonry"

const MasonryLayout = ({images}: {images: string[] | []}) => {
  return (
    <Masonry columnsCount={5} gutter="10px">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          style={{width: "100%", display: "block"}}
        />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
