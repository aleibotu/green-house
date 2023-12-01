import {MapboxOverlay} from "@deck.gl/mapbox";
import {Layer, Map, Source, useControl} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

function DeckGLOverlay(props) {
    const overlay = useControl(() => new MapboxOverlay(props));
    overlay.setProps(props);
    return null;
}

const skyLayer = {
    id: "sky",
    type: "sky",
    paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
    },
};

export function MapView() {
    const layers = [];
    return (
        <div style={{
            height: 'calc(100vh - 58px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 1
        }}>
            <Map
                initialViewState={{
                    longitude: 121.94789,
                    latitude: 30.96466,
                    zoom: 4.5,
                    pitch: 65,
                    bearing: 0,
                }}
                maxPitch={85}
                mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            >
                <Source
                    id="mapbox-dem"
                    type="raster-dem"
                    url="mapbox://mapbox.mapbox-terrain-dem-v1"
                    tileSize={512}
                    maxzoom={14}
                />
                <Layer {...skyLayer} />
                <DeckGLOverlay layers={layers}/>
            </Map>
        </div>
    )
}
