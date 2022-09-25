import urlbat, { Params } from "urlbat";


export interface IShield {
    label?: string;
    fileName?: string;
    src: string;
}

const style = 'for-the-badge'

export function transform(shields: IShield[]): IShield[] {

    for (let shield of shields) {

        let params: Params = {
            style
        }
        if (shield.label) {
            params.label = shield.label;
        }
        if (shield.fileName) {
            params.filename = shield.fileName;
        }
        shield.src = urlbat(shield.src, params)
    }

    return shields;
}