import React from 'react'

export const QuoteBox = ({userRandom,colorRandom,clickButton}) => {

const styleButton = {
backgroundColor: colorRandom
    }
    
    return (
    <div>

        <p>{userRandom.author}</p>

    </div>
  )

   }