import urlcatM, { ParamMap } from "urlcat";

const urlcat = (urlcatM as unknown as { default: typeof urlcatM }).default;


export interface IShield {
    label?: string;
    fileName?: string;
    src: string;
}

const style = 'for-the-badge'

export function transform(shields: IShield[]): IShield[] {

    for (let shield of shields) {

        let params: ParamMap = {
            style
        }
        if (shield.label) {
            params.label = shield.label;
        }
        if (shield.fileName) {
            params.filename = shield.fileName;
        }
        shield.src = urlcat(shield.src, params)
    }

    return shields;
}