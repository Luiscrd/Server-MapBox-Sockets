import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { MapBox } from '../classes/map';
import { Marker } from '../classes/market';

export const map = new MapBox();

export const mapSockets = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('new-marker', (marker: Marker) => {

        map.addMarker(marker);

    })
}




