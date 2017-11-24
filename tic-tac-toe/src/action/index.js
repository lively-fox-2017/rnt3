export const setUsernameAction = (data) => (
  {
    type: 'INPUT_NAME',
    payload: {
      username: data.username,
      password: data.password
    }
  }
)