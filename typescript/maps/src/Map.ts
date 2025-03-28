export interface Mappable {
    location: {
        lat: number,
        lng: number
    },
    markerContent(): string
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const mapContainer = document.getElementById(divId) as HTMLElement;
        this.googleMap = new google.maps.Map(mapContainer, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            },
            mapId: 'DEMO_MAP_ID'
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.marker.AdvancedMarkerElement({
            map: this.googleMap,
            position: mappable.location
        });

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        });
    }

}