export const getGeolocation = async () =>
  new Promise<GeolocationCoordinates>((resolve) =>
    navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords)),
  );
