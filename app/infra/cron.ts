// Cron job that runs every 12 minutes
export const cron = new sst.aws.Cron('BBBCronJob', {
  schedule: 'rate(12 minutes)',
  function: 'app/packages/functions/cron.handler',
});
