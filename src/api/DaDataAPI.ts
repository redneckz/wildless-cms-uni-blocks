import { getGeolocation } from '../utils/getGeolocation';

import type { DaDataResult } from '../types';

export function DaDataAPI(baseURL = '') {
  async function getFetcherAddress() {
    if (!('geolocation' in navigator)) {
      return null;
    }

    try {
      const coords = await getGeolocation();
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
