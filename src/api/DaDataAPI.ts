import { getCurrentPosition } from '../utils/getCurrentPosition';

import type { DaDataResult } from '../types';

export function DaDataAPI(API_URL: string, TOKEN: string) {
  async function getFetcherAddress() {
    if (!('geolocation' in navigator)) {
      return null;
    }

    const coords = await getCurrentPosition();
    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify({
        lat: coords.latitude,
        lon: coords.longitude,
        count: 1,
      }),
    });

    const data = (await response.json()) as DaDataResult;
    return data?.suggestions?.[0]?.data?.city;
  }

  return {
    getFetcherAddress,
  };
}
