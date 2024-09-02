type recentType = {
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
    name: 'b.O.A.T',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Goat_Diljit.jpg',
    singer: 'Diljit Dosanjh',
    released: '2022',
    singerImage:
      'https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Diljit.jpg',
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



export const reelsImages = [
    {
       id : 1,
       image : "https://images.unsplash.com/photo-1724931498964-a1f392ba9ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
       id : 2,
       image : "https://images.unsplash.com/photo-1724862941235-0d880da26f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
       id : 3,
       image : "https://images.unsplash.com/photo-1724931498964-a1f392ba9ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
       id : 4,
       image : "https://images.unsplash.com/photo-1724931498964-a1f392ba9ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
       id : 5,
       image : "https://plus.unsplash.com/premium_photo-1697778136245-d0d67de916ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
       id : 6,
       image : "https://images.unsplash.com/photo-1724931498964-a1f392ba9ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
       id : 7,
       image : "https://images.unsplash.com/photo-1724961754771-d5543bd71a54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
       id : 8,
       image : "https://images.unsplash.com/photo-1724931498964-a1f392ba9ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
      
      },
    {
       id : 9,
       image :"https://plus.unsplash.com/premium_photo-1698362819363-0b2a2f83c0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
     },
    {
       id : 10,
       image : "https://images.unsplash.com/photo-1724805053809-3c09736b2ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },

];

export const reelsVideo = [
   {
     id : 1,
     url : require("../../assets/videos/video.mp4")
   },
   {
     id : 2,
     url : require("../../assets/videos/video1.mp4")
   },
   {
     id : 3,
     url : require("../../assets/videos/video2.mp4")
   },
   {
     id : 4,
     url : require("../../assets/videos/video3.mp4")
   },
   {
     id : 5,
     url : require("../../assets/videos/video4.mp4")
   },
]