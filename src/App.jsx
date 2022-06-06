import { useState } from 'react'
import './App.css'
import { QuoteBox } from './Components/QuoteBox'
import users from './json/User.json'


const arrayColors = ['#6FC2D', '#6FC2D3',
  '#793E77', '#793E77',
  '#8222C3', '#8222C3',
  '#149BF8', '#149BF8',
  '#ECF13E', '#ECF13E',
  '#90E64D', '#90E64D',
  '#134655', '#134655',
  '#E9F375', '#E9F375',
  '#208ED6', '#208ED6',
  '#3F5109', '#3F5109',
  '#3CFE99','#3CFE99',
  '#586FF2'

]

console.log(arrayColors);

function App() {

  

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
   } 

   const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  } 

  const [userRandom, SetUserRandom] = useState(getElementRandom(users))
  const [colorRandom, SetColorRandom] = useState(getElementRandom(arrayColors))

  const appStyle = {
        backgroundColor: colorRandom 
   }

   const clickButton = () => {
     SetUserRandom(getElementRandom(users))
     SetColorRandom(getElementRandom(arrayColors))
   }

  return (
    <div style={appStyle} className="App"> 
    <QuoteBox
    userRandom={userRandom}    
    colorRandom={colorRandom}
    clickButton={clickButton}
 
    />
    </div>
  )
}

export default App
