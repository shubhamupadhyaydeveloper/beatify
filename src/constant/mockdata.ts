export type recentType = {
  name: string;
  image: string;
  singer: string;
  released: string;
  singerImage: string[] | string;
};

export const recentlyData: recentType[] = [
  {
    name: 'Jhoom - R&B Mix',
    image:
      'https://c.saavncdn.com/671/Jhoom-Ali-Zafar-Hindi-2011-20190329150037-500x500.jpg',
    singer: 'Ali Zafar',
    released: '14 February 2011',
    singerImage:
      'https://images.news18.com/ibnlive/uploads/2022/05/ali-zafar.jpg',
  },
  {
    name: 'Ambersariya',
    image: 'https://c.saavncdn.com/840/Fukrey-2013-500x500.jpg',
    singer: 'Munna Dhiman, Ram Sampath, and Sona Mohapatra',
    released: '2013',
    singerImage: [
      'https://yt3.googleusercontent.com/ytc/AIdro_kr_7hXS2Zpnqengg9mbRktyquBfE639BNt2nwwU3zFN0I=s900-c-k-c0x00ffffff-no-rj',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ram_Sampath_at_the_Loreal_Paris_Femina_Women_Awards_2014.jpg/220px-Ram_Sampath_at_the_Loreal_Paris_Femina_Women_Awards_2014.jpg',
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/leisure-jun12-37_647_060217010656.jpg',
    ],
  },
  {
    name: 'Lover',
    image: 'https://i.scdn.co/image/ab67616d0000b273fb47bdcc34dd45740c7816d7',
    singer: 'Diljit Dosanjh',
    released: '2023',
    singerImage:
      'https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Diljit.jpg',
  },
  {
    name: 'G.O.A.T',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Goat_Diljit.jpg',
    singer: 'Diljit Dosanjh',
    released: '2022',
    singerImage:
      'https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Diljit.jpg',
  },
  {
    name: 'Loser',
    image: 'https://c.saavncdn.com/021/Loser-Hindi-2016-20211220222542-500x500.jpg',
    singer: 'Dino James',
    released: '2022',
    singerImage:
      'https://yt3.googleusercontent.com/mxF2vU8SbHZRKt2wyKAc2FeNizd2kHoKLwawLT1bpycefwlmZS64EBVOM7pkfqIPqKgDa2hAiQ=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Keede',
    image: 'https://c.saavncdn.com/078/Keede-Hindi-2021-20210311205357-500x500.jpg',
    singer: 'Dino James',
    released: '2022',
    singerImage:
      'https://yt3.googleusercontent.com/mxF2vU8SbHZRKt2wyKAc2FeNizd2kHoKLwawLT1bpycefwlmZS64EBVOM7pkfqIPqKgDa2hAiQ=s900-c-k-c0x00ffffff-no-rj',
  },
];

export const categoryData: string[] = [
  'Romantic',
  'Killer',
  'Horrer',
  'Comedy',
  'Action',
  'Fiction',
  'Drama',
  'Adventure',
];

export const filterOptions: string[] = ['Playlists', 'Artists'];

type artist = {
  name: string;
  img: string;
};

export const artistsData: artist[] = [
  {
    name: 'Arijit Singh',
    img: 'https://wallpapers.com/images/featured/arijit-singh-q307hnimzo1z26ct.jpg',
  },
  {
    name: 'KK',
    img: 'https://www.navhindtimes.in/wp-content/uploads/2022/06/1606731360_KK_1.jpg',
  },
  {
    name: 'Diljit Dosanjh',
    img: 'https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Diljit.jpg',
  },
  {
    name: 'Atif Aslam',
    img: 'https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84',
  },
  {
    name: 'Darsham Raval',
    img: 'https://i.pinimg.com/originals/8f/16/bd/8f16bd4b4c9140f2d591eee8ef9382b2.jpg',
  },
  {
    name: 'A.R Rahman',
    img: 'https://static.toiimg.com/thumb/imgsize-23456,msid-104940654,width-600,resizemode-4/104940654.jpg',
  },
  {
    name: 'Pritam',
    img: 'https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca',
  },
  {
    name: 'Vishal Mishra',
    img: 'https://i.scdn.co/image/ab6761610000e5ebfb13d10be20fdcb5a670f551',
  },
  {
    name: 'Kishore Kumar',
    img: 'https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj',
  },
];


export const musicOptions = [
  {
    name: 'Pop',
    color: '#4E31AA',
    image:
      'https://media.istockphoto.com/id/1455958110/vector/pop-art-style-font.jpg?s=612x612&w=0&k=20&c=qNbueaF_UuDw4cQ3nSJdjDVGfjHTfOIO5-5uW6YDk8g=',
  },
  {
    name: 'Punjabi',
    color: '#A04747',
    image: 'https://source.boomplaymusic.com/group10/M00/08/17/e754a1a038bf4ef7b7c8082a62156f8c_320_320.jpg'
  },
  {
    name: 'Hindi',
    color: '#295F98',
    image: 'https://i.scdn.co/image/ab67616d0000b27316c6c8bb0e6505eaf1105607'
  },
  {
    name: 'English',
    color: '#C7253E',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ff7c23656a589774020de9ea'
  },
  {
    name: 'New Songs',
    color: '#77E4C8',
    image: 'https://assets.rjassets.com/static/playlist/9824311/eb95f1ee8bb1d97.jpg'
  },
  {
    name: 'Made for You',
    color: '#399918',
    image: 'https://images.squarespace-cdn.com/content/v1/5d5d57d1c5261d0001977a67/9c746d49-9e7c-43e6-b18c-fa32ab398a4c/KSCo_SpotifyAlbumCover_SongsToMakeYouSmile_Shop_SqUnder250.jpg'
  },
];