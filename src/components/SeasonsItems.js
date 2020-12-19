import React from 'react'

const SeasonsItems = ({ item }) => {
    console.log(item)
    return (
        <div className="items">
            <h1>{item.title}</h1>
            <p className='seasons'><strong>Season:</strong> {item.season}</p>
            <p className='dates'><strong>Air Date:</strong> {item.air_date}</p>
            <ul><p className='seasons'><strong>Characters:</strong> </p>
                <p>
                    {item.characters.map(character => (
                        <li><a href="#">{character}</a></li>
                    ))}
                </p>
            </ul>
        </div>
    )
}

export default SeasonsItems
