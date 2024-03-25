export const serialize = (res) => {
  const response = {
    data: res?.data,
    status: res?.status || 0,
    headers: res?.headers || null,
  };
  return response;
};
