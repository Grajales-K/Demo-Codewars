const friends = [
  { username: 'David', status: 'online', lastActivity: 11 },
  { username: 'Lucy', status: 'offline', lastActivity: 22 },
  { username: 'Bob', status: 'online', lastActivity: 54 },
  { username: 'Santi', status: 'offline', lastActivity: 15 },
  { username: 'Elena', status: 'online', lastActivity: 18 }
];

const whoIsOnline = (friends) => {
  const result = {};

  for (let friend of friends) {
    let status = friend.status;

    if (status === 'online' && friend.lastActivity > 10) {
      status = 'away';
    }

    if (!result[status]) {
      result[status] = [];
    } 
    result[status].push(friend.username);
  }

  return result;

};



console.log(whoIsOnline(friends));

