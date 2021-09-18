let oldTrackId, currentTrackId;

DZ.Event.subscribe('current_track', (data, eventName) => {

  // Set var currentTrackId with the current track id
  currentTrackId = data.track.id;

  if (oldTrackId && currentTrackId !== oldTrackId) {
    // Old track is complete, new track is loaded  
    // Do something here...
  }

  // save old track id
  oldTrackId = currentTrackId;

  // change document title
  document.title = `${data.track.title} by ${data.track.artist.name}`;

});
