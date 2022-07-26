import React from 'react'

export const HeaderQuoteBox = ({userRandom,colorRandom,clickButton}) => {

const styleButton = {
backgroundColor: colorRandom
    }
    
    return (
    <article className='Q-Style' style={{color: colorRandom}}>
        <h1>&quot</h1>
        <h2>{userRandom.quote}</h2>

    </article>
  )

   }