const {client} = require('../shard');

module.exports = {
  name: 'Activity',
  enable() {
    client.user.setActivity('Trap Cosmos', {
      type: 'WATCHING'
    });
  }
};