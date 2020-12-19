import React from 'react'
import SeasonsItems from './SeasonsItems'

const SeasonsGrid = ({items, isLoading}) => {
    return isLoading ? (
        <div className="loader">loading...</div>
    ): (
        <div className="grid-item container">
            {items.map((item) => (
                <SeasonsItems key={item.episode_id}  item={item}></SeasonsItems>
            ))}
        </div>
    )
}

export default SeasonsGrid
