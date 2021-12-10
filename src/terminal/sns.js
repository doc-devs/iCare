'use strict';
const AWS = require('aws-sdk');
const { nurseOptions } = require('./nurseOptions');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

const publish = async (topic, ptInfo) => {

  const payload = {
    Message: JSON.stringify(ptInfo),
    TopicArn: topic,
    MessageGroupId: '1'
  };

  await sns.publish(payload).promise()
    .then(() => {
      console.log('\nPatient added successfully\n');
      rl.emit('repeat-questions');
    })
    .catch(console.error);
}

rl.on('repeat-questions', () => {
  nurseOptions();
});

module.exports = publish
