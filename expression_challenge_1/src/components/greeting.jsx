const Greeting = () => {
  const name = "John";

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today's date is: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Greeting;