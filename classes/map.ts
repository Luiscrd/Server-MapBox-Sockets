import { v4 as uuidv4 } from 'uuid';
import { Marker } from './market';

export class MapBox {

    private markers: { [key: string]: Marker } = {
       '1': {
            id: uuidv4(),
            name: 'Luis',
            lng: -75.75512993545835,
            lat: 45.351977429012345,
            color: '#dd8fee'
          },
         '2': {
            id: uuidv4(),
            name: 'Fernando',
            lng: -75.75195645527508,
            lat: 45.351584045823756,
            color: '#790af0'
          },
         '3': {
            id: uuidv4(),
            name: 'Coral',
            lng: -75.75900589557777,
            lat: 45.34794635758547,
            color: '#19884b'
          }
    };
    
    constructor() {}

    getMarkers() {

        return this.markers;

    }

    addMarker(marker: Marker) {

        this.markers[marker.id] = marker;
        
    }

    deleteMarker(id: string) {

        delete this.markers[id];

        return this.getMarkers();

    }

    moveMarker(marker: Marker) {

        this.markers[marker.id].lng = marker.lng;

        this.markers[marker.id].lat = marker.lat;

    }


}