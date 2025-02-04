export interface ClubEvent {
  id: string;
  title: string;
  clubId: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  imageUrl: string;
  registrationLink?: string;
}