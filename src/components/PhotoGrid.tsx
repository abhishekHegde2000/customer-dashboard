import { fetchPhotos } from "@/services/PhotoService";
import { Photo } from "@/types/types";
import { useEffect, useState } from "react";

interface PhotoGridProps {
    id?: number;
}

const PhotoGrid = ({ id }: PhotoGridProps) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loadedPhotos, setLoadedPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadPhotos = async () => {
            setLoading(true);
            try {
                const data = await fetchPhotos();
                console.log(data);
                setLoadedPhotos(data);
                // Initialize with first 9 photos if available
                setPhotos(data.slice(0, 9));
            } catch (error) {
                console.error("Error fetching photos:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPhotos();

        const updatePhotos = (photos: Photo[]): Photo[] => {
            if (loadedPhotos.length === 0) return photos;
            // Select 9 random photos from the loadedPhotos array
            const shuffledPhotos = [...loadedPhotos].sort(
                () => 0.5 - Math.random()
            );
            return shuffledPhotos.slice(0, 9);
        };

        const intervalId = setInterval(() => {
            setPhotos((prevPhotos) => updatePhotos(prevPhotos));
        }, 1000); // Update every 1 second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [loadedPhotos, id]);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner or more styled loading indicator
    }

    return (
        <div className="grid grid-cols-3 gap-2">
            {photos.map((photo) => (
                <div key={photo.id}>
                    <img src={photo.url} className="w-full h-40 object-cover" />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
