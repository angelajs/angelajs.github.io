
navigator.serviceWorker.register('serviceworker.js').then(registration => {
  console.log("success!");
  if (registration.installing) {
    registration.installing.postMessage("Howdy from your installing page.");
  }
}, err => {
  console.error("Installing the worker failed!", err);
});
///    );
        //navigatior.serviceWorker.register('/service-worker.js');
///}
//     .register('serviceworker.js')
//     .then((swRegistration) => {
//         let region = new CircularGeofenceRegion({
//             name: 'fence',
//             latitude: 52.301764,
//             longitude: -0.002352,
//             radius: 10
//         });
//         let options = {
//             includePositon: true
//         };
//         swRegistration.geofencing.add( region, options)
//         .then(
//             (geofence) => console.log(geofence.id),
//             (error) => console.log(error)
//         );
//     });

// };
