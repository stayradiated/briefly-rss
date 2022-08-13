import * as dateFns from "date-fns";

const formatDuration = (millis: number): string => {
  const seconds = dateFns.millisecondsToSeconds(millis) % 60;
  const minutes = dateFns.millisecondsToMinutes(millis) % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export { formatDuration };
