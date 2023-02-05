import express from "express";
import { User } from "../models";
import Album from "../models/album";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.get("/sample", async (req, res, next) => {
  let user = await User.findOne({}).exec();

  console.log(user , 'useruseruser')
  if (!user) {
    const newUser = new User({
      username: "Freddie",
    });
    user = await newUser.save();
  }

  res.status(200).send(user);
});

const AlbumsSong = [
  {
    title: "Love, Damini",
    year: 2022,
    artist: "Burna boy",
    lenght: "220",
    songs: [
      {
        title: "Rollercoaster",
        duration: "188",
      },

      {
        title: "Solid",
        duration: "196",
      },
      {
        title: "For My Hand",
        duration: "180",
      },      
      {
        title: "Wild Dreams",
        duration: "193",
      },
      {
        title: "Cloak & Dagger",
        duration: "160",
      }
    ],
  },
  {
    title: "Certified Lover Boy",
    year: 2021,
    artist: "Drake",
    lenght: "600",
    songs: [
      {
        title: "Fucking Fans",
        duration: "190",
      },
      {
        title: "Get Along Better",
        duration: "175",
      },
      {
        title: "TSU",
        duration: "189",
      },
      {
        title: "In the Bible",
        duration: "230",
      },
      {
        title: "Yebba's Heartbreak",
        duration: "160",
      }
    ],
  },
  {
    title: "Scorpion",
    year: 2018,
    artist: "Drake",
    lenght: "500",
    songs: [
      {
        title: "After Dark",
        duration: "160",
      },
      {
        title: "Talk Up",
        duration: "180",
      },
      {
        title: "Emotionless",
        duration: "190",
      },
      {
        title: "Jaded",
        duration: "150",
      },
      {
        title: "Summer Games",
        duration: "190",
      }
    ],
  },
  {
    title: "Twice as Tall",
    year: 2020,
    artist: "Burna Boy",
    lenght: "500",
    songs: [
      {
        title: "Monsters You Made",
        duration: "170",
      },
      {
        title: "Level Up (Twice as Tall)",
        duration: "200",
      },
      {
        title: "Naughty by Nature",
        duration: "170",
      },
      {
        title: "Way Too Big",
        duration: "190",
      },
      {
        title: "Wonderful",
        duration: "150",
      }
    ],
  },
  {
    title: "The Wall",
    year: 1979,
    artist: "Pink Floyd",
    lenght: "200",
    songs: [
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      }
    ],
  },
  {
    title: "Bad",
    year: 1987,
    artist: "Michael Jackson",
    lenght: "300",
    songs: [
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      },
      {
        title: "Two of us",
        duration: "300",
      }
    ],
  },
];

router.get("/album", async (req, res, next) => {
  let album = await Album.find({})

  if(album.length === 0){
    album = await Album.create(AlbumsSong);
  }
  res.status(200).json(album)
});




module.exports = router;


