function App() {
  const show = true;
  let text = "";

  if (show) {
    text = "Hello";
  } else {
    text = "React";
  }

  return <div>{text}</div>;
}

export default App;
