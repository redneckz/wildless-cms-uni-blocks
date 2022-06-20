export const getCurrentPosition = async () =>
  new Promise<GeolocationCoordinates>((resolve) =>
    navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords)),
  );
