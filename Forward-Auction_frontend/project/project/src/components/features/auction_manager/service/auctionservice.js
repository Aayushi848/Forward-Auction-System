import axios from 'axios';

export const getCurrentMonthAuctions = async () => {
  const res = await axios.get('http://localhost:5000/api/auction/list/month');
  return res.data;
};

export const getCurrentWeekAuctions = async () => {
  const res = await axios.get('http://localhost:5000/api/auction/list/week');
  return res.data;
};

export const getTodaysAuctions = async () => {
  const res = await axios.get('http://localhost:5000/api/auction/list/today');
  return res.data;
};
