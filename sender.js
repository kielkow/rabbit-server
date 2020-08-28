const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }

    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }

        const queue = 'codingtest';

        channel.assertQueue(queue);

        channel.sendToQueue(queue, Buffer.from('hello from its coding time'));

        console.log(`Message send ${queue}`);
    });
});
