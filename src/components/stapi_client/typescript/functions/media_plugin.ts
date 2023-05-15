import { strapiUploadsBaseUrl } from "./../config";
import type { Image } from "./../types/Image";

export function getImageUrl(image: Image) {
    return strapiUploadsBaseUrl + image.data.attributes.url;
}
