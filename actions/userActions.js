export const changeUserName = (name) => {
  return {
    type: 'CHANGE_USER_NAME',
    payload: { name },
  }
};
