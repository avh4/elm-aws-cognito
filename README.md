https://www.twitch.tv/avh4


 - https://github.com/aws/amazon-cognito-identity-js

## How to build

```bash
npm run build
elm-make --output elm.js Main.elm
```

## Next steps

 - Make input events on the first form work
 - Try refactoring each form into a separate module
 - Add "Resend confirmation" button to the confirmation form
 - Add login form
 - Do authentication call to get an Identity Pool Access Token
 - Add nice default styling to the form
 - Extract a nice API for adding Cognito auth to any Elm app
