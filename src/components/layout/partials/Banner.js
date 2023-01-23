import React, { useState } from 'react';

const Banner = ({
  ...props
}) => {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <>
        
        </>
      )}
    </>
  );
}

export default Banner;