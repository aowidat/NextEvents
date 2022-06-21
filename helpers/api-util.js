import { xgetFeaturedEvents, xgetFilteredEvents,xgetEventById,xgetAllEvents } from "../dummy-data";
export async function getAllEvents() {
  return xgetAllEvents();
}

export async function getFeaturedEvents() {
  return xgetFeaturedEvents();
}

export async function getEventById(id) {
  return xgetEventById(id);
}

export async function getFilteredEvents(dateFilter) {
  return xgetFilteredEvents(dateFilter);
}