var AWS = require('aws-sdk')

var credentials = new AWS.SharedIniFileCredentials({profile: 'personal'});
AWS.config.credentials = credentials;

var requiredRegions = ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2']

var params = {
  //   Filters: [
  //   //   {
  //   //     Name: 'STRING_VALUE',
  //   //     Values: [
  //   //       'STRING_VALUE',
  //   //       /* more items */
  //   //     ]
  //   //   },
  //   //   /* more items */
  //   ],
  //   // ReservedInstancesId: 'STRING_VALUE',
  //   // ReservedInstancesListingId: 'STRING_VALUE'
  };

for (var i=0;i<requiredRegions.length;i++){
  AWS.config.update({ region: requiredRegions[i] });
  var ec2 = new AWS.EC2();
  ec2.describeReservedInstancesListings(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

}
