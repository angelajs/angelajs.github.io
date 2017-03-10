self.ongeofenceenter = (event) => {
  console.log(event.geofence.id);
  console.log(event.geofence.region.name);

  if (event.geofence.region.name !== "fence"){
    event.waitUntill(event.geofence.remove());
  }
};

self.ongeofenceerror = (event) => {
  console.log(event.geofence.id);
  console.log(event.geofence.region.name);
  console.log(event.error);

  event.waitUntill(self.registration.geofencing.add(event.geofence.region)).then((geofence) => {
    //remonitoring succeeded
  },(error) => {
    //remonitoring failed
  });
};

self.onsomeevent = (event) => {
  event.waitUntill(
    self.registration.geofencing.getAll({
      name: 'fence'
    })
    ).then(
      geofences => geofences.forEach(fence => fence.remove())
    );
};

self.onsomeotherevent = (event) => {
  let geofence_id = '';
  event.waitUntill(self.registration.geofencing.getByID(geofence_id)).then(geofence => geofence.remove());
};
