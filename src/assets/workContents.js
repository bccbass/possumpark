const cloudinaryPrefix =
  "https://res.cloudinary.com/dyb9ascpy/image/upload/v1724824186/possumpark/video/";
  const videoPrefix = 'https://res.cloudinary.com/dyb9ascpy/video/upload/v1724886027/possumpark/video/'

const workContents = [
  {
    title: "Love of the Game",
    videoID: `${videoPrefix}lofi.mov`,
    img: cloudinaryPrefix + "lofithumb",
    description: "Commercial brief",
    role: "composer, instrumentalist, mixing, visuals",
    tags: ["lofi", "composer", "commercial", "chill"],
  },
  {
    title: "Innovation In a Minute",
    videoID: `${videoPrefix}afropop.mov`,
    img: cloudinaryPrefix + "afropopthumb",
    role: "composer, instrumentalist, mixing, visuals",
    description: "Commercial brief",

    tags: ["energetic", "composer", "commercial", "world"],
  },
  {
    title: "Amazing in Motion",
    videoID: `${videoPrefix}indie.mov`,
    img: cloudinaryPrefix + "indiethumb",
    role: "composer, instrumentalist, mixing, visuals",
    description: "Commercial brief",

    tags: ["energetic", "composer", "commercial", "indie", "cover"],
  },
  {
    title: "Horizons of Energy",
    videoID: `${videoPrefix}orchestral.mov`,
    img: cloudinaryPrefix + "orchestralthumb",
    description: "Commercial brief",
    role: "composer, instrumentalist, mixing, visuals",
    tags: ["orchestral", "composer", "commercial", "emotive"],
  },
  {
    title: "Power to Move",
    videoID: `${videoPrefix}highenergy.mov`,
    img: cloudinaryPrefix + "highenergythumb",
    description: "Commercial brief",
    role: "composer, instrumentalist, mixing, visuals",
    tags: ["highenergy", "composer", "commercial", "emotive"],
  },
  {
    title: "New York Lonely Boy",
    videoID: `${videoPrefix}lonelyboy.mov`,
    img: cloudinaryPrefix + "lonelyboythumb",
    role: "upright bass, engineer",
    description: "Song from season 1 Girls5Eva, featuring the Milk Carton Kids",

    tags: ["television", "commercial", "indie"],
  },
  {
    title: "New York Moms",
    videoID: `${videoPrefix}moms.mov`,
    img: cloudinaryPrefix + "momsthumb",
    role: "upright bass, engineer",
    description: "Song from season 2 of Girls5Eva, featuring Ingrid Michaelson",

    tags: ["television", "commercial", "indie"],
  },
];

export default workContents;
