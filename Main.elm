module Main exposing (..)

import Cognito
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Html.App


type alias Model =
    { signupForm :
        { username : String
        , email : String
        , password : String
        }
    }


initialModel =
    { signupForm =
        { username = "demo3"
        , password = "password"
        , email = "gruen0aermel+elmlive+demo3@gmail.com"
        }
    }


type Msg
    = DoSignUp
    | CognitoError String
    | CognitoSignupSuccess { username : String }


update msg model =
    case Debug.log "update" msg of
        DoSignUp ->
            ( model
            , Cognito.signup model.signupForm
            )

        CognitoError _ ->
            ( model, Cmd.none )

        CognitoSignupSuccess _ ->
            ( model, Cmd.none )


view model =
    Html.div []
        [ input
            [ placeholder "Email Address"
            , defaultValue model.signupForm.email
            ]
            []
        , input
            [ placeholder "Username"
            , defaultValue model.signupForm.username
            ]
            []
        , input
            [ placeholder "Password"
            , defaultValue model.signupForm.password
            , type' "password"
            ]
            []
        , button
            [ onClick DoSignUp
            ]
            [ text "Sign Up" ]
        ]


main =
    Html.App.program
        { init = ( initialModel, Cmd.none )
        , subscriptions =
            \model ->
                Sub.batch
                    [ Cognito.signupSuccess CognitoSignupSuccess
                    , Cognito.errors CognitoError
                    ]
        , update = update
        , view = view
        }
