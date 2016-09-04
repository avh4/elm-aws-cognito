// If you wish to use a custom build of the AWS SDK for JavaScript, put the relative path to it
// here, starting with `./`, eg `./vendor/my-aws-sdk-build.js`.
// This build must include the Cognito Identity Service Provider service.
var AWS_SDK_BUNDLE = 'amazon-cognito-identity-js/dist/aws-cognito-sdk.min.js'

module.exports = {
  // Example setup for your project:
  // The entry module that requires or imports the rest of your project.
  // Must start with `./`!
  entry: './src/entry',
  // Place output files in `./dist/my-app.js`
  output: {
    path: 'dist',
    filename: 'my-app.js'
  },
  // ... other configuration

  // The current version of the AWS SDK for JavaScript does not work without extra configuration
  // under webpack, see https://github.com/aws/aws-sdk-js/issues/603.
  // This configuration uses the packaged output file as it is simple, see the issue for other
  // options with different tradeoffs.
  resolve: {
    alias: {
      'aws-sdk$': AWS_SDK_BUNDLE
    }
  },
  module: {
    noParse: /aws-cognito-sdk/,
    // Optional, but makes debugging library code much nicer:
    preLoaders: [
      {
        test: /\.min\.js$/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: require.resolve(AWS_SDK_BUNDLE),
        loader: 'exports?AWSCognito'
      }
    ]
  }
}
