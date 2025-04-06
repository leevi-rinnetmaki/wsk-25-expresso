// mock data
const userItems = [
    {
      user_id: 9592,
      user_name: 'Frank',
      weight: 11,
      owner: 3609,
      filename: 'f3dbafakjsdfhg4',
      birthdate: '2021-10-12',
    },
    {
      user_id: 9590,
      user_name: 'Mittens',
      weight: 8,
      owner: 3602,
      filename: 'f3dasdfkjsdfhgasdf',
      birthdate: '2021-10-12',
    },
  ];
  
  const listAllUsers = () => {
    return userItems;
  };
  
  const findUserById = (id) => {
    return userItems.find((item) => item.user_id == id);
  };
  
  const addUser = async (user) => {
    const {name, username, email, password} = user;
    const newId = userItems[0].user_id + 1;
    userItems.unshift({user_id: newId, user_name, weight, filename, birthdate});
    return {user_id: newId};
  };
  
  export {listAllUsers, findUserById, addUser};
  