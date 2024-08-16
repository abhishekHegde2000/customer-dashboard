import { photos, URL1 } from "@/utils/constants";

export const fecthPhotos = async () => {
    try {
        const response = await fetch(URL1);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return photos;
    }
};
