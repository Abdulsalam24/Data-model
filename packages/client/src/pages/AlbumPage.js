import LoadingSpinner from 'components/LoadingSpinner'
import React from 'react'
import { useApiFetch } from 'util/api'

function AlbumPage() {
  const {error, isLoading, response} = useApiFetch("/album")

  { isLoading &&  <LoadingSpinner></LoadingSpinner>}

  function convertDuration(seconds) {
    const min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    const stringSec = sec.toString()
    if(stringSec.includes("0")){
        sec = "00"
    }
    return `${min}:${sec}`;
  }

  const totalDur = response?.map((res) => (res)).map((x , i) => x.songs.map((song) => {return song.duration})).map((x) => {return x.reduce((a,b)=> a+b)})

  return (
    <main className='album-page'>
            <h3>Album collection</h3>
            <div className='album-collection'>
                {
                    response?.map((album , i) => (
                        <div key={album._id}>
                            <div>
                                <h4>{album.title}</h4>
                                <p>{album.year}</p>
                                <p>{album.artist}</p>
                                <p>Album length : {convertDuration(totalDur[i])}</p>
                            </div>
                            <div>
                                {
                                    album.songs.map((song , i) => (
                                        <div key={i}>
                                            <p>{i + 1}. {song.title}</p>
                                            <p>{convertDuration(song.duration)}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
    </main>
  )
}

export default AlbumPage