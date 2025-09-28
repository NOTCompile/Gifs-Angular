import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static mapGyphyItemGif(item: GiphyItem): Gif {
        return{
            id: item.id,
            title: item.title,
            url: item.images.original.url,
        }
    }

    static mapGyphyItemsToGifArray(items: GiphyItem[]): Gif[]{
        return items.map(this.mapGyphyItemGif);
    }
}