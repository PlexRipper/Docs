import type { ParamsMap } from '@jasonlandbridge/url-tools';
import { urlMerge } from '@jasonlandbridge/url-tools';

export interface IShield {
  label?: string;
  fileName?: string;
  src: string;
}

const style = 'for-the-badge';

export function transform(shields: IShield[]): IShield[] {
  for (const shield of shields) {
    const params: ParamsMap = {
      style,
    };
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
