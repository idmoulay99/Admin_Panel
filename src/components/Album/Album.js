import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './albums.css'

function Album({artistId, title}) {

  const [artistName, setArtistName] = useState("")

  useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${artistId}`)
          .then(res => setArtistName(res.data.username));
  }, [])

  return (
    <div className='song-card-body'>
        <div className="song-card">
            <img 
                className="song-card_image" 
                src="https://ia803103.us.archive.org/28/items/cd_aladdin-sane_david-bowie_1/cd_aladdin-sane_david-bowie_1_itemimage.png" 
                alt={`${artistName} - ${title}`}
            />
            <div className="song-card_info">
                <div className="song-card_info_artist">{artistName}</div>
                <div className="song-card_info_album">{title}</div>
        </div>
        <div className="song-card_play"></div>
        </div>
    </div>
  )
}

export default Album