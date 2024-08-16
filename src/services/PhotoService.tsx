import { photos, URL1 } from "@/utils/constants";

export const fetchPhotos = async () => {
    try {
        const response = await fetch(URL1);
        const data = await response.json();
        // console.log(data);
        return photos;
    } catch (error) {
        console.log("url not giving phots, returned constants", error);
        return photos;
    }
};

export default fetchPhotos;
