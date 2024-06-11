import React from 'react';

const FeatureCard = () => {
  return (
    <div className='card max-w-2xl mx-auto h-[30rem] bg-base-100 shadow-xl mt-10 lg:mt-0'>
      <figure>
        <img
          src='https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg'
          alt='Featured'
          className='object-contain'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          Check out the hottest games!
          <div className='badge badge-warning'>FEATURED</div>
        </h2>
        <p>
          Player Hover lets you check out the latest and hottest games in any
          platform.
        </p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Fashion</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
