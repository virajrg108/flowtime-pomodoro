import Dexie from 'dexie';

export const db = new Dexie('FlowtimeDatabase');
db.version(1).stores({
  sessions: '++id, sessionType, date, duration, start'
});