const { client } = require('../shard');
const config = require('../config');

module.exports = {
    name: 'MentionReply',
    enable() {
    },
    message(msg) {
        let mentionUser = msg.mentions.users.first();
        if (mentionUser && mentionUser.id === client.user.id) {
            return msg.channel.send(`Hey! My Prefix is **${config.prefix}**`);
        }
    }
};