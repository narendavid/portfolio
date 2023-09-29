"use client"
import { favorites as data } from '@/common/favorites'
import React, { useEffect, useState } from 'react'
import FavoriteCard from './cards/FavoriteCard'
import Spinner from './spinners/Spinner'

const Favorites = () => {
    const [favorites, setFavorites] = useState<Favorite[]>([])

    useEffect(() => {
        setFavorites(data)
    }, [data])

    return (
        <section className="bg-bgLight flex items-center justify-center dark:bg-darkPrimary" id="favorites">
            <div className="flex flex-col gap-12 max-w-7xl w-5/6 pt-20 pb-20">
                <div className="flex flex-col gap-3">
                    <h2 className="title text-lg">Resources<span className="text-primary">.</span></h2>
                    <div className='grid grid-col-1 md:grid-cols-3 gap-10'>
                        {
                            favorites.length === 0
                                ?
                                <Spinner />
                                :
                                favorites.map((favorite, index) => (
                                    <FavoriteCard favorite={favorite} key={index} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Favorites