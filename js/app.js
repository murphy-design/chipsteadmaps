function initMap() {
    // locations
    const locations = [
        {lat: 51.2963683, lng: -0.170368}, // Chipstead
        {lat: 36.1295426, lng: -5.3708525}, // Gibraltar
        {lat: 45.8805345, lng: 2.940928} // France
    ]

    // The map, centered on France
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5, center: locations[2]});

    // The markers
    let marker;

    // output markers on map
    locations.forEach((curr, index) => {
        if (index !== 2) {
            console.log(curr);
            marker = new google.maps.Marker({position: curr, map: map});
        }
    })
}