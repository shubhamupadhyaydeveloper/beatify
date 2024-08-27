type recentType = {
    name : string,
    image : string
}

export const recentlyData: recentType[] = [
     {
         name : "Jhoom - R&B Mix",
         image : "https://c.saavncdn.com/671/Jhoom-Ali-Zafar-Hindi-2011-20190329150037-500x500.jpg"
     },
    {
         name : "Ambersariya",
         image : "https://c.saavncdn.com/840/Fukrey-2013-500x500.jpg"
    },
     {
         name : "Lover",
         image : "https://i.scdn.co/image/ab67616d0000b273fb47bdcc34dd45740c7816d7"
     }
    ,
     {
         name : "G.O.A.T",
         image : "https://upload.wikimedia.org/wikipedia/en/b/bb/Goat_Diljit.jpg"
     }

]

export const categoryData:string[] = [
    "Romantic",
    "Killer",
    "Horrer",
    "Comedy",
    "Action",
    "Fiction",
    "Drama",
    "Adventure"
]

export const filterOptions:string[] = ["Playlists",'Artists']

type artist = {
     name : string ,
     img : string
}

export const artistsData:artist[] = [
     {
        name : 'Arijit Singh',
        img : 'https://wallpapers.com/images/featured/arijit-singh-q307hnimzo1z26ct.jpg'
     },
     {
        name : 'KK',
        img : 'https://www.navhindtimes.in/wp-content/uploads/2022/06/1606731360_KK_1.jpg'
     },
     {
        name : 'Diljit Dosanjh',
        img : 'https://www.bollywoodhungama.com/wp-content/uploads/2016/03/Diljit.jpg'
     },
     {
        name : 'Atif Aslam',
        img : 'https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84'
     },
]