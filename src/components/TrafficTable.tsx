import React from 'react';

import GoogleBar from '../assets/google-bar.svg'
import YoutubeBar from '../assets/youtube-bar.svg'
import FacebookBar from '../assets/facebook-bar.svg'
import InstagramBar from '../assets/instagram-bar.svg'
import TwitterBar from '../assets/twitter-bar.svg'
import PinterestBar from '../assets/pinterest-bar.svg'

const websites = [
  { name: 'Google', value: '45%', image:GoogleBar },
  { name: 'YouTube', value: '35%', image:YoutubeBar  },
  { name: 'Instagram', value: '30%', image:InstagramBar  },
  { name: 'Pinterest', value: '25%' , image:PinterestBar },
  { name: 'Facebook', value: '20%', image:FacebookBar  },
  { name: 'Twitter', value: '15%' , image:TwitterBar },
];

export default function TrafficTable() {
  return (
    <div className="bg-[#F7F9FB] p-4 rounded-xl shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">Traffic by Website</h3>
      <div className="space-y-4">
        {websites.map((site) => (
          <div key={site.name} className="flex items-center gap-4">
            <span className="text-sm text-primary-100">{site.name}</span>
            <div className="flex items-center">
            <img src={site.image} alt={site.image}/>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}