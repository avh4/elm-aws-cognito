port module Cognito
    exposing
        ( errors
        , signup
        , signupSuccess
        , confirmUser
        , confirmUserSuccess
        )


port errors : (String -> msg) -> Sub msg


port signup :
    { username : String
    , password : String
    , email : String
    }
    -> Cmd msg


port signupSuccess : ({ username : String } -> msg) -> Sub msg


port confirmUser :
    { username : String
    , code : String
    }
    -> Cmd msg


port confirmUserSuccess : (() -> msg) -> Sub msg
