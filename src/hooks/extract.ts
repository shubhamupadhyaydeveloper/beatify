
export const extractTypeAndId = (url: string): {type: string; id: string} => {
  let type: string = '';
  let id: string = '';

  // Regex patterns to match each type of URL
  const reelPattern1 =
    /^http:\/\/localhost:3000\/sharelink\/song\/([a-f\d]{24})$/;
  const reelPattern2 =
    /^http:\/\/192.168.1.109:3000\/sharelink\/song\/([a-f\d]{24})$/;
//   const reelPattern2 = /^reelzzz:\/\/share\/reel\/([a-f\d]{24})$/;
//   const userPattern1 =
//     /^http:\/\/localhost:3000\/share\/user\/([a-zA-Z0-9_]+)$/;
//   const userPattern2 = /^reelzzz:\/\/share\/user\/([a-zA-Z0-9_]+)$/;

  if (reelPattern1.test(url)) {
    type = 'reel';
    id = url.match(reelPattern1)![1];
  } else if (reelPattern2.test(url)) {
    type = 'reel';
    id = url.match(reelPattern2)![1];
//   } else if (userPattern1.test(url)) {
//     type = 'user';
//     id = url.match(userPattern1)![1];
//   } else if (userPattern2.test(url)) {
//     type = 'user';
//     id = url.match(userPattern2)![1];
//   } else {
    console.log('URL format not recognized');
  }

  return {type, id};
};
