export const formatDateToHhMm = (date: Date | string): string => {
  try {
    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
      throw new Error("Invalid date");
    }

    const hours = d.getHours();
    const minutes = d.getMinutes();

    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");

    return `${hoursStr}:${minutesStr}`;
  } catch (error) {
    throw new Error("Invalid date");
  }
};
