import { getCurrentPosition } from '../utils/getCurrentPosition';

import type { DaDataResult } from '../types';

export function DaDataAPI(baseURL = '') {
  async function getFetcherAddress() {
    if (!('geolocation' in navigator)) {
      return null;
    }

    try {
      const coords = await getCurrentPosition();
      const response = await fetch(`${baseURL}/geolocate`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          lat: coords.latitude,
          lon: coords.longitude,
          count: 1,
        }),
      });

      const data = (await response.json()) as DaDataResult;
      return data?.suggestions?.[0]?.data?.city;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  return {
    getFetcherAddress,
  };
}
