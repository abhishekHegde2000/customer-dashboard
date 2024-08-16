import { fecthPhotos } from "@/services/PhotoService";
import { Photo } from "@/types/types";
import { useEffect, useState } from "react";

const PhotoGrid = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const data = await fecthPhotos();
                setPhotos(data);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };

        loadPhotos();

        // create an array of updatePhotos: photo[] which updates random 9 photos every 10 seconds

        const updatePhotos = (photos: Photo[]): Photo[] => {
            let updatedPhotos = [...photos];
            for (let i = 0; i < 9; i++) {
                updatedPhotos[Math.floor(Math.random() * photos.length)] =
                    photos[Math.floor(Math.random() * photos.length)];
            }
            return updatedPhotos;
        };

        const intervalId = setInterval(updatePhotos, 10000); // Update every 10 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="grid grid-cols-3 gap-2">
            {photos.map((photo, index) => (
                <div>
                    <img
                        key={index}
                        src={photo.url}
                        className="w-full h-40 object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
