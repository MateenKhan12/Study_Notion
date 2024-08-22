import React from 'react';
import office from '../../assets/office.mp4';

function TeamCollaboration() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-5xl">
        {/* Video of the Team Collaboration */}
        <div className="flex items-center justify-center">
          <video 
            className="rounded-lg shadow-lg w-full h-auto" // Add rounded corners and shadow
            width="1035"
            height="515"
            src={office} 
            autoPlay 
            loop 
            muted 
          />
        </div>
      </div>
    </div>
  );
}

export default TeamCollaboration;
