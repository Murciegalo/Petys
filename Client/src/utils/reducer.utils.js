export const createAction = (type, payload) => {
  console.log(payload, 'ACTION');
  return {
    type,
    payload,
  };
};
