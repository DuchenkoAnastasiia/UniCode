function App() {
  const arr = ["a", "b", "c", "d", "e"];
  const list = arr.map((item) => <li>{item}</li>);
  return (
    <ul>
      <li>{list}</li>
    </ul>
  );
}

export default App;
