const calculateDate = (createdAt: Date) => {
  const createdAtDate = new Date(createdAt);
  const currentDate = new Date();

  const differenceInTime = currentDate.getTime() - createdAtDate.getTime();
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays ? `${differenceInDays}d` : 'now';
};

export default calculateDate;
