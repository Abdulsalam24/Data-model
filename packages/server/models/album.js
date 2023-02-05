import mongoose from 'mongoose'

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

const AlbumSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    lenght: {
        type: String,
        required: true
    },
    songs: [SongSchema]
});

const Album = mongoose.model("Album", AlbumSchema);

export default Album
