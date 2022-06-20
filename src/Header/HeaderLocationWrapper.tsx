import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps, DaDataResult } from '../types';
import { projectSettings } from '../ProjectSettings';
import { getCurrentPosition } from '../utils/getCurrentPosition';

interface HeaderLocationContent {
  defaultLocation?: string;
}

export interface HeaderLocationProps extends HeaderLocationContent, UniBlockProps {}

const DADATA_GEO_API_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';

export const HeaderLocationWrapper = JSX<HeaderLocationProps>(
  ({ children, context, defaultLocation = '', ...rest }) => {
    const [city, getCity] = context.useGeolocation(defaultLocation, getFetcherAddress);

    return children({ location: city, onClick: getCity, ...rest });
  },
);

const getFetcherAddress = async () => {
  if (!('geolocation' in navigator)) {
    return null;
  }

  const coords = await getCurrentPosition();
  const response = await fetch(DADATA_GEO_API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${projectSettings.DADATA_TOKEN}`,
    },
    body: JSON.stringify({
      lat: coords.latitude,
      lon: coords.longitude,
      count: 1,
    }),
  });

  const data = (await response.json()) as DaDataResult;
  return data?.suggestions?.[0]?.data?.city;
};
