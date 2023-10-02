import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HotelCard from './HotelCard';

export default function Property() {
    const { id } = useParams();
    const hotelsData = useSelector(state => state.hotels);
    const [selectedHotel, setSelectedHotel] = useState(null);

    useEffect(() => {
        // Iterate over all cities and search for the hotel by ID
        for (let city in hotelsData) {
            const hotel = hotelsData[city].find(h => h.id === parseInt(id, 10));
            if (hotel) {
                setSelectedHotel(hotel);
                break; // Stop iterating once hotel is found
            }
        }
    }, [hotelsData, id]);

    return (
        <div>
            {selectedHotel && <HotelCard hotel={selectedHotel} />}
        </div>
    );
}

