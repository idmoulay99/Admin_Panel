import React, { useEffect, useState } from 'react'
import fetchApi from '../../data/fetchApi'
import Album from './Album'
import './albums.css'

function Albums() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
      fetchApi("albums", setAlbums)
    }, [])
    
  return (
    <div className="albums-container">
        {
            albums.map((album) => (
                <Album key={album.id} artistId={album.userId} title={album.title} />
                )
            )
        }
    </div>
  )
}

export default Albums