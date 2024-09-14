import React from 'react'
function ReactJSXPage() {
  const name = "Іван"
  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/"
  }
  const num1 = 5
  const num2 = 10
  const sum = num1 + num2
  const colors = ["Червоний", "Синій", "Зелений"]

  return (
      <>
    <div className="App">
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img  src="https://picsum.photos/200" alt="IMG" />
      <a href={favoriteSite.url}>  {favoriteSite.name}</a>
      <p>Сума чисел: {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

 
export default ReactJSXPage;