export type AuthNavigationProps = {
    SignIn : undefined,
    Onboarding : undefined,
    AuthPage : undefined,
    SignUp : undefined,
    ForgetPassword : undefined,
    ResetPassword : undefined,
RegisterSuccess : undefined
    EmailVerification : undefined
}

export type TabNavigationProps = {
   Home : undefined,
   Library : undefined,
   Create: undefined,
   Search : undefined
}

export type AppNavigationProp = TabNavigationProps & {
     Profile : undefined,
     Index : undefined
}

export type AllNavigationProp = AuthNavigationProps & TabNavigationProps & AppNavigationProp

export type HomeNavigationProp = {
     Profile : undefined,
    ActualHome : undefined
}