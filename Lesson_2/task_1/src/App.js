function App() {
  const state = { name: "Иван", age: 25 };
  return (
    <div>
      name: {state.name}, age: {state.age}
    </div>
  );
}

export default App;
