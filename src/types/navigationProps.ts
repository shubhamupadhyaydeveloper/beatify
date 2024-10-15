export type AuthNavigationProps = {
  SignIn: undefined;
  AuthPage: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  ResetPassword: undefined;
  EmailVerification: {email : string};
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
  id : string 
  data : {any : any}
  };
  ProfilePage: undefined;
  EditProfile: undefined;
  Followers: undefined;
  Following: undefined;
  CameraPage: undefined;
  ProfileImage : {image : string,tagName : string};
};

export type ExploreNavigationProp = {
  SearchResults: undefined;
  ActualExplore: undefined;
  SearchSong:{tagName : string,image : string,searchKeyword : string}
};

export type DrawerNavigationTypes = {
   Index : undefined,
};

export type LibraryNavigationTypes = {
  Index: undefined;
  LikedSong: undefined;
  SelectArtist : undefined;
  PlaylistPage : undefined;
  CreatePlaylist : undefined;
  EditPlaylist : undefined;
  AddSongs : undefined;
};

export type CreateNavigationTypes = {
   CreateIndex : undefined;
}
