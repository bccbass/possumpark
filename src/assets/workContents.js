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
    genres: ['commercial']
  },
  {
    title: "Innovation In a Minute",
    videoID: `${videoPrefix}afropop.mov`,
    img: cloudinaryPrefix + "afropopthumb",
    role: "composer, instrumentalist, mixing, visuals",
    description: "Commercial brief",
    tags: ["energetic", "composer", "commercial", "world"],
    genres: ['commercial']
  },
  {
    title: "Amazing in Motion",
    videoID: `${videoPrefix}indie.mov`,
    img: cloudinaryPrefix + "indiethumb",
    role: "composer, instrumentalist, mixing, visuals",
    description: "Commercial brief",
    tags: ["energetic", "composer", "commercial", "indie", "cover"],
    genres: ['commercial']
  },
  {
    title: "Horizons of Energy",
    videoID: `${videoPrefix}orchestral.mov`,
    img: cloudinaryPrefix + "orchestralthumb",
    description: "Commercial brief",
    role: "composer, instrumentalist, mixing, visuals",
    tags: ["orchestral", "composer", "commercial", "emotive"],
    genres: ['commercial']

  },
  {
    title: "Power to Move",
    videoID: `${videoPrefix}highenergy.mov`,
    img: cloudinaryPrefix + "highenergythumb",
    description: "Commercial brief",
    role: "composer, instrumentalist, mixing, visuals",
    tags: ["highenergy", "composer", "commercial", "emotive"],
    genres: ['commercial']
  },
  {
    title: "Two Feet",
    videoID: `${videoPrefix}2feet.mov`,
    img: cloudinaryPrefix + "2feetthumb",
    role: "visuals, production, composer, instrumentalist",
    description: "Inspired by the western works of Cormac McCarthy",
    tags: ["television", "commercial", "indie"],
    genres: ['jazz || experimental']
  }, 
  {
    title: "New York Lonely Boy",
    videoID: `${videoPrefix}lonelyboy.mov`,
    img: cloudinaryPrefix + "lonelyboythumb",
    role: "upright bass, engineer",
    description: "Song from season 1 Girls5Eva, featuring the Milk Carton Kids",
    tags: ["television", "commercial", "indie"],
    genres: ['television']
  },
  {
    title: "New York Moms",
    videoID: `${videoPrefix}moms.mov`,
    img: cloudinaryPrefix + "momsthumb",
    role: "upright bass, engineer",
    description: "Song from season 2 of Girls5Eva, featuring Ingrid Michaelson",
    tags: ["television", "commercial", "indie"],
    genres: ['television']
  },
  {
    title: "Drunkards Walk Pt. 1",
    videoID: `${videoPrefix}drunkards.mov`,
    img: cloudinaryPrefix + "drunkardsthumb",
    role: "upright bass, production",
    description: "Assembly Trio (ft. Aaron Arntz, Christopher Bear) from album Russell St. Recordings",
    tags: ["television", "commercial", "indie"],
    genres: ['jazz || experimental']
  },
  {
    title: "Doing",
    videoID: `${videoPrefix}doing.mov`,
    img: cloudinaryPrefix + "doingthumb",
    role: "production, composer, instrumentalist, visuals",
    description: "Doing from album Kimono Dragon",
    tags: ["television", "commercial", "indie"],
    genres: ['jazz || experimental']
  },
  {
    title: "Escape to Mañana",
    videoID: `${videoPrefix}manana.mov`,
    img: cloudinaryPrefix + "mananathumb",
    role: "production, composer, instrumentalist",
    description: "Escape to Mañana from album Kimono Dragon",
    tags: ["television", "commercial", "indie"],
    genres: ['jazz || experimental']
  },
  {
    title: "O B F O L G B",
    videoID: `${videoPrefix}obfolgb.mov`,
    img: cloudinaryPrefix + "obfolgbthumb",
    role: "production, composer, instrumentalist, visuals",
    description: "O B F O L G B from album Kimono Dragon",
    tags: ["television", "commercial", "indie"],
    genres: ['ambient || sound design']
  },
  {
    title: "Imaginary Friends",
    videoID: `${videoPrefix}imaginary.mov`,
    img: cloudinaryPrefix + "imaginarythumb",
    role: "production, composer, instrumentalist, mix, master",
    description: "Upcoming release, featuring Phil Rodriguez (trumpet)",
    tags: ["television", "commercial", "indie"],
    genres: ['ambient || sound design']
  },
  {
    title: "BATTAB",
    videoID: `${videoPrefix}battab.mov`,
    img: cloudinaryPrefix + "battabthumb",
    role: "production, composer, instrumentalist",
    description: "Teaser for upcoming release from band BATTAB",
    tags: ["television", "commercial", "indie"],
    genres: ['indie']
  },
  {
    title: "My Midnight Heart",
    videoID: `${videoPrefix}break.mov`,
    img: cloudinaryPrefix + "breakthumb",
    role: "production, arrangement, instrumentalist",
    description: "Title track from My Midnght Hearts ep Break",
    tags: ["television", "commercial", "indie"],
    genres: ['indie']
  },

];

export default workContents;
