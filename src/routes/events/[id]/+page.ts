import { error } from '@sveltejs/kit';
import events from '$lib/data/events.js';

export const load = ({ params }: { params: { id: string } }) => {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    throw error(404, 'Event not found');
  }

  return { event };
};

export const entries = () => {
  return events.map((event) => ({ id: event.id }));
};

export const prerender = true;
