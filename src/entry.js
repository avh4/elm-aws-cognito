var config = require('./config')

var AmazonCognitoIdentity = require('amazon-cognito-identity-js')

var poolData = {
  UserPoolId: config.userPoolId,
  ClientId: config.userPoolClientId
}
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

var attributeList = []

var dataEmail = {
  Name: 'email',
  Value: 'gruen0aermel+elmlive+demo1@gmail.com'
}
var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail)
attributeList.push(attributeEmail)

// var dataPhoneNumber = {
//   Name: 'phone_number',
//   Value: '+15555555555'
// }
// var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber)
// attributeList.push(attributePhoneNumber)

userPool.signUp('demo1', 'password', attributeList, null, function (err, result) {
  if (err) {
    console.log(err)
    return
  }
  var cognitoUser = result.user
  console.log('user name is ' + cognitoUser.getUsername())
})
