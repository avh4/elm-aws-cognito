port module Cognito exposing (signup, errors, signupSuccess)


port signup :
    { username : String
    , password : String
    , email : String
    }
    -> Cmd msg


port errors : (String -> msg) -> Sub msg


port signupSuccess : ({ username : String } -> msg) -> Sub msg
