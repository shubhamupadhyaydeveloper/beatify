export type AuthNavigationProps = {
  SignIn: undefined;
  Onboarding: undefined;
  AuthPage: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  ResetPassword: undefined;
  RegisterSuccess: undefined;
  EmailVerification: undefined;
};

export type TabNavigationProps = {
  Home: undefined;
  Library: undefined;
  Create: undefined;
  Search: undefined;
};

export type AppNavigationProp = TabNavigationProps & {
  Index: undefined;
};

export type HomepageNavigationProp = {
    ActualPage : undefined
}
export type ExploreNavigationProp = {
    SearchResults : undefined,
    ActualExplore : undefined
}

export type DrawerNavigationTypes = {
   Profile : undefined,

}