// Set up Cognito

var config = require('./config')

var AmazonCognitoIdentity = require('amazon-cognito-identity-js')

var poolData = {
  UserPoolId: config.userPoolId,
  ClientId: config.userPoolClientId
}
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

// Set up Elm

var app = window.Elm.Main.fullscreen()

app.ports.signup.subscribe(function (data) {
  var attributeList = []

  var dataEmail = {
    Name: 'email',
    Value: data.email
  }
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail)
  attributeList.push(attributeEmail)

  // var dataPhoneNumber = {
  //   Name: 'phone_number',
  //   Value: '+15555555555'
  // }
  // var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber)
  // attributeList.push(attributePhoneNumber)

  userPool.signUp(data.username, data.password, attributeList, null, function (err, result) {
    if (err) {
      app.ports.errors.send(err.message)
      return
    }
    var cognitoUser = result.user
    app.ports.signupSuccess.send({ username: cognitoUser.getUsername() })
  })
})
