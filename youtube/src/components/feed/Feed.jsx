import React from 'react'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail3.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail1.png';


const Feed = () => {
  return ( 
    <div>
        {/* Feed */}
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>Most amazing view of the nature !</h2>
        <h3>NatureExpo</h3>
        <p>20M views &bull; 1 day ago</p>
    </div>
  )
}

export default Feed