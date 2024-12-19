let version = 1;

export const initDB = () => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open('Focus');

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains('sessions')) {
        console.log('Creating sessions store');
        db.createObjectStore(Stores.Users, { keyPath: 'id' });
      }
      // no need to resolve here
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log('request.onsuccess - initDB', version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};
