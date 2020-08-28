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

        channel.consume(queue, (message) => {
            console.log(`Message received: ${message.content.toString()}`);
        }, {
            noAck: true
        });
    });
});
