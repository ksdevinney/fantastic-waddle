function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Your tasks</h4>
      <div className="todos">
        <div className="todo">
          <div className="checkbox">

          </div>
          <div className="text">
            Get bread
          </div>
          <div className="delete-todo">
            x
          </div>
        </div>

        <div className="todo is-complete">
          <div className="checkbox">

          </div>
          <div className="text">
            Eat bread
          </div>
          <div className="delete-todo">
            x
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
