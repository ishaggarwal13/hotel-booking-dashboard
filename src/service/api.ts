import axios from "axios";

const API_URL = "http://localhost:5000/bookings";

export const getBookingData = async (startDate: string, endDate: string) => {
  const response = await axios.get(API_URL, {
    params: { startDate, endDate },
  });
  return response.data;
};
