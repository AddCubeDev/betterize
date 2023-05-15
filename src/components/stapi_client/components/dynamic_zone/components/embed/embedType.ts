import { EmbedVideoPlatform } from "./../../../../typescript/types/components";

const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\//;
const vimeoRegex = /^https:\/\/player\.vimeo\.com\/video\/\d+/;

export function getEmbedType(url: string) {
    if (youtubeRegex.test(url)) {
        return EmbedVideoPlatform.youtube;
    } else if (vimeoRegex.test(url)) {
        return EmbedVideoPlatform.vimeo;
    } else {
        return EmbedVideoPlatform.unsupported;
    }
}
