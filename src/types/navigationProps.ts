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
  ActualPage: undefined;
  Artist: {data: {name: string; img: string}};
  SongDetail: {
    data: {name: string; image: string; singer: string; released: string,singerImage : string | string[]};
  };
};

export type ExploreNavigationProp = {
  SearchResults: undefined;
  ActualExplore: undefined;
  Reels : {index : number}
};

export type DrawerNavigationTypes = {
  Profile: undefined;
};

export type LibraryNavigationTypes = {
  Index: undefined;
  LikedSong: undefined;
  SelectArtist : undefined;
  PlaylistPage : undefined;
  CreatePlaylist : undefined
};

export type CreateNavigationTypes = {
   CreateIndex : undefined;
}