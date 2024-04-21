ymaps.ready(function () {

    let myMap = new ymaps.Map('map-test', {
      center: [51.12825001, 71.4304722322],
      zoom: 15,
      controls: ['routePanelControl']
    });
  
    let control = myMap.controls.get('routePanelControl');
    let city = 'Астана';
  
    // let location = ymaps.geolocation.get();
  
    // location.then(function(res) {
    // 	let locationText = res.geoObjects.get(0).properties.get('text');
    // 	console.log(locationText)
    // });
  
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    function setDestination(input) {
      let address = getAttractions(input); // This function call should be linked to your chatbot response function
    
      if (address) {
        // If an address was found, set it as the destination
        control.routePanel.state.set({
          type: 'masstransit',
          fromEnabled: false,
          from: 'Your current location', // You might want to get the user's actual location here
          toEnabled: true,
          to: address,
        });
      } else {
        // Handle the case where the input is not recognized as an attraction
        console.log("Attraction not found.");
      }
    }
    
    function success(pos) {
      const crd = pos.coords;
  
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
  
      let address = getAttractions(input);
      let reverseGeocoder = ymaps.geocode([crd.latitude, crd.longitude]);
      let locationText = null;
      reverseGeocoder.then(function (res) {
        locationText = res.geoObjects.get(0).properties.get('text')
        console.log(locationText)
  
        control.routePanel.state.set({
          type: 'masstransit',
          fromEnabled: false,
          from: locationText,
          toEnabled: true,
          to: `${city}, ${address}`,
        });
      });
  
      console.log(locationText)
  
      
  
      control.routePanel.options.set({
        types: {
          masstransit: true,
          pedestrian: true,
          taxi: true
        }
      })
    }
  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error, options);

    ymaps.ready(initMap);
  
  });