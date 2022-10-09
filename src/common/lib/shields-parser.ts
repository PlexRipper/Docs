import { ParamsMap, urlMerge } from "@jasonlandbridge/url-tools";

export interface IShield {
    label?: string;
    fileName?: string;
    src: string;
}

const style = 'for-the-badge'

export function transform(shields: IShield[]): IShield[] {

    for (let shield of shields) {

        let params: ParamsMap = {
            style
        }
        if (shield.label) {
            params.label = shield.label;
        }
        if (shield.fileName) {
            params.filename = shield.fileName;
        }

        shield.src = urlMerge(shield.src, params);
    }

    return shields;
}