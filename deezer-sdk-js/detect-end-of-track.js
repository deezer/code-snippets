var old_track, current_track;
 
DZ.Event.subscribe('current_track', function(data, evt_name) {
  
  // Set var current_track with the current track id
  current_track = data.track.id;
 
  if (old_track != undefined && current_track != old_track) {
    // Old track is complete, new track is loaded  
    // Do something here...
  }
 
  // save old track id
  old_track  = current_track;
 
  // change document title
  document.title = data.track.title + " by "+ data.track.artist.name;
 
});
