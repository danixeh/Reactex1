import React from 'react'

export const QuoteBox = ({userRandom,colorRandom,clickButton}) => {

const styleButton = {
backgroundColor: colorRandom
}

    return (
    <article className='Q-Style' style={{color: colorRandom}}>
        <h2>{userRandom.quote}</h2>
        <p>{userRandom.author}</p>
        <button 
        className='card-btn' 
        style={styleButton}
        onClick={clickButton} 
        >&#62;</button>
    </article>
  )

   }