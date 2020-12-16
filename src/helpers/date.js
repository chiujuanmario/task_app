export const timeToSeconds = (time) => {
  const [hours, minutes] = time.split(':');

  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  return (+hours) * 60 * 60 + (+minutes) * 60;
};

export const seconsToTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}