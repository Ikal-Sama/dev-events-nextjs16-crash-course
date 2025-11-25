export type EventItem = {
  id: string;
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    id: '1',
    title: 'React Conference 2024',
    image: '/images/event1.png',
    slug: 'react-conf-2024',
    location: 'San Francisco, CA',
    date: 'March 15-17, 2024',
    time: '9:00 AM - 6:00 PM'
  },
  {
    id: '2',
    title: 'Hackathon Summit',
    image: '/images/event2.png',
    slug: 'hackathon-summit-2024',
    location: 'New York, NY',
    date: 'April 8-9, 2024',
    time: '10:00 AM - 10:00 PM'
  },
  {
    id: '3',
    title: 'AI & Machine Learning Meetup',
    image: '/images/event3.png',
    slug: 'ai-ml-meetup-april',
    location: 'Seattle, WA',
    date: 'April 20, 2024',
    time: '6:00 PM - 9:00 PM',
  },
  {
    id: '4',
    title: 'Web Dev Workshop',
    image: '/images/event4.png',
    slug: 'web-dev-workshop-2024',
    location: 'Austin, TX',
    date: 'May 5, 2024',
    time: '2:00 PM - 5:00 PM',
  },
  {
    id: '5',
    title: 'Node.js Conference',
    image: '/images/event5.png',
    slug: 'nodejs-conf-2024',
    location: 'Portland, OR',
    date: 'June 10-12, 2024',
    time: '8:30 AM - 5:30 PM',
  },
  {
    id: '6',
    title: 'Startup Pitch Night',
    image: '/images/event6.png',
    slug: 'startup-pitch-night',
    location: 'Boston, MA',
    date: 'June 25, 2024',
    time: '5:30 PM - 8:30 PM',
  },
  {
    id: '7',
    title: 'DevOps World',
    image: '/images/event-full.png',
    slug: 'devops-world-2024',
    location: 'Chicago, IL',
    date: 'July 15-17, 2024',
    time: '9:00 AM - 6:00 PM',
  },
  {
    id: '8',
    title: 'Mobile Dev Hackathon',
    image: '/images/event1.png',
    slug: 'mobile-hackathon-2024',
    location: 'Los Angeles, CA',
    date: 'August 2-4, 2024',
    time: '10:00 AM - 8:00 PM',
  }
];
