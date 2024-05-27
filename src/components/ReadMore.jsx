import React, { useState } from 'react';

const ReadMore = ({ content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const truncatedContent = content.slice(0, 100); // Display the first 100 letters

  return (
    <div>
      <p>{showFullContent ? (content 
      ) : truncatedContent}

        {showFullContent && (
            <span className='text-primary ' style={{'cursor':'pointer'}} onClick={() => setShowFullContent(false)}> &nbsp; Read less..</span>
        )}

      {!showFullContent && (
        <span className='text-primary ' style={{'cursor':'pointer'}} onClick={() => setShowFullContent(true)}>&nbsp;  Read More</span>
      )}</p>
    </div>
  );
};

export default ReadMore;