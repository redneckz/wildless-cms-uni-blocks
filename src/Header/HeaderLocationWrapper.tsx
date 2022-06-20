import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps, DaDataResult } from '../types';

interface HeaderLocationContent {
  defaultLocation?: string;
}

export interface HeaderLocationProps extends HeaderLocationContent, UniBlockProps {}

const URL_GET_ADDRESS = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
const TOKEN = '3d9a50a398fe6e919ec0b355ca4d23779f078df4';

export const HeaderLocationWrapper = JSX<HeaderLocationProps>(
  ({ children, context, defaultLocation, ...rest }) => {
    const { data } = context.useAsyncData(URL_GET_ADDRESS, getFetcherAddress);

    const city = data?.suggestions?.[0].data.city;

    return children({ location: city || defaultLocation, ...rest });
  },
);

const getFetcherAddress = async (): Promise<DaDataResult> => {
  if (!('geolocation' in navigator)) {
    return new Promise((resolve) => resolve({} as DaDataResult));
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const response = await fetch(URL_GET_ADDRESS, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + TOKEN,
        },
        body: JSON.stringify({
          lat: coords.latitude,
          lon: coords.longitude,
          count: 1,
        }),
      });
      resolve(response.json());
    }, reject);
  });
};
