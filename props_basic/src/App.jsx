const App = () => {
  return (
    <div>
      <User name="Dhruv" age={19} />
    </div>
  );
};

//without destructuring

// const User = (props) => {
//   return (
//     <section>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//     </section>
//   );
// };

//with Destructuring
const User = ({name, age}) => {
  return (
    <section>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </section>
  );
};
export default App;