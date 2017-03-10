navigator.serviceWorker.register('serviceWorker.js').then((swRegistration) => {
  let region = new CircularGeofenceRegion({
    name: 'fence',
    latitude: 52.301764,
    longitude: -0.002352,
    radius: 10
  });
  let options = {
    includePositon: true
  };
  swRegistration.geofencing.add(region, options).then(
    (geofence) => console.log(geofence.id),
    (error) => console.log(error)
    );
  });
