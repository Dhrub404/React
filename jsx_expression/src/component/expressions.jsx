const Expressions = () => {
    const myName = 'Dhruv'

    const multiply = (a , b) => a * b

    const specialClass = 'simple-class'

  return (
    <div>
        <h1>{myName}</h1>

        <p>List : {["apple", "banana", "cat", "Dog"]}</p>
      
      <p> 2+2 </p>  {/* without curly braces it is considered as text 2+2 */}
      <p> 2+2 = {2+2} </p>    {/* with curly braces it is considered as maths 2+2 i.e. 4 */}

      <p> 3*2 = {multiply(3,2)}</p>

      <p className={specialClass}> This is special class</p>
    </div>
  )
}

export default Expressions
