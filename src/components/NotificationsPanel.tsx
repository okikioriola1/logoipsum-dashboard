import React from 'react';

import FixedBugIcon from '../assets/fixed-bug-icon.svg'
import NewUserIcon from '../assets/new-user-icon.svg'
import SubscribedIcon from '../assets/subscribed-icon.svg'
import ChangedStyleIcon from '../assets/changed-style-icon.svg'
import ReleasedNewIcon from '../assets/released-new-icon.svg'
import SubmittedBugIcon from '../assets/submitted-bug-icon.svg'
import ModifiedDataIcon from '../assets/modified-data-icon.svg'
import DeletedPageIcon from '../assets/deleted-page-icon.svg'
import NataliIcon from '../assets/natali-craig-icon.svg'
import DrewIcon from '../assets/drew-cano-icon.svg'
import AndiIcon from '../assets/andi-lane-icon.svg'
import KoreIcon from '../assets/kore-okumus-icon.svg'
import KateIcon from '../assets/kate-morrison-icon.svg'
import MelodyIcon from '../assets/melody-macy-icon.svg'

const notifications = [
  {
    icon: FixedBugIcon,
    title: 'You fixed a bug',
    time: 'Just now',
    color: 'text-green-500',
  },
  {
    icon: NewUserIcon,
    title: 'New user registered',
    time: '59 minutes ago',
    color: 'text-blue-500',
  },
  {
    icon: FixedBugIcon,
    title: 'You fixed a bug',
    time: 'Just now',
    color: 'text-green-500',
  },
  {
    icon: SubscribedIcon,
    title: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    color: 'text-purple-500',
  },
];

const activities = [
    {
      avatar: ChangedStyleIcon,
      title: 'Changed the style.',
      time: 'Just now',
    },
    {
      avatar: ReleasedNewIcon,
      title: 'Released a new version.',
      time: '59 minutes ago',
    },
    {
      avatar: SubmittedBugIcon,
      title: 'Submitted a bug.',
      time: '12 hours ago',
    },
    {
      avatar: ModifiedDataIcon,
      title: 'Modified A data in Page X.',
      time: 'Today, 11:59 AM',
    },
    {
      avatar: DeletedPageIcon,
      title: 'Deleted a page in Project...',
      time: 'Feb 2, 2024',
    },
  ];

const contacts = [
  { name: 'Natali Craig', image: NataliIcon },
  { name: 'Drew Cano', image: DrewIcon },
  { name: 'Andi Lane', image:AndiIcon },
  { name: 'Koray Okumus', image: KoreIcon },
  { name: 'Kate Morrison', image: KateIcon },
  { name: 'Melody Macy', image:MelodyIcon},
];

export default function NotificationsPanel() {
  return (
    <div className="p-4 md:p-6 rounded-xl shadow-sm">
      <h3 className="text-sm font-sans text-gray-800 mb-4">Notifications</h3>
      
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${notification.color} bg-opacity-10`}>
              <img src={notification.icon} className={`h-5 w-5 ${notification.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-800">{notification.title}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-sans text-gray-800 mb-4">Activities</h2>
        
        <div className="relative">
        
        <div 
            className="absolute left-3 w-px bg-gray-200" 
            style={{
              top: '8px',
              height: `calc(100% - ${activities.length > 1 ? '64px' : '0px'})`
            }}
          />          
    
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="relative flex items-start gap-2">
                
                <div className="relative">
                  <img
                    src={activity.avatar}
                    alt=""
                    className="h-5 w-5 rounded-full ring-4 ring-white"
                  />
                </div>
                
            
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-5'>

      <h4 className="text-sm font-sans text-gray-800 mb-4">Contacts</h4>
      
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={contact.image}
              alt={contact.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm text-gray-800">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}