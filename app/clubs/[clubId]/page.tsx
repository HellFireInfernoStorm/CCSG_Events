import { clubEvents } from '@/lib/mock-data/events';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function ClubEventsPage({ params }: Readonly<{ params: { clubId: string } }>) {
  const events = clubEvents[params.clubId];
  
  if (!events) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-cyberGold">
        {params.clubId.charAt(0).toUpperCase() + params.clubId.slice(1)} Club Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id}
            className="bg-obsidian/95 border border-cyberGold/20 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="aspect-video relative">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-cyberGold mb-2">{event.title}</h2>
              <p className="text-white/80 mb-4">{event.description}</p>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span>{event.date} at {event.time}</span>
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}