import { ClubEvent } from '../types/events';

export const clubEvents: Record<string, ClubEvent[]> = {
  'tamil': [
    {
      id: 'tamil-1',
      title: 'Tamil New Year Celebration',
      clubId: 'tamil',
      date: '2024-04-14',
      time: '18:00',
      venue: 'Main Auditorium',
      description: 'Join us in celebrating Tamil New Year with traditional performances and food.',
      imageUrl: '/events/tamil-new-year.jpg',
      registrationLink: 'https://forms.example.com/tamil-new-year'
    },
  ],
  'drama': [
    {
      id: 'drama-1',
      title: 'Annual Theater Production',
      clubId: 'drama',
      date: '2024-05-20',
      time: '19:30',
      venue: 'Theater Hall',
      description: 'The Drama Club presents their annual production featuring student performances.',
      imageUrl: '/events/drama-annual.jpg',
      registrationLink: 'https://forms.example.com/drama-annual'
    },
  ],
};