import "./App.css";
import "./Tags.js";
import RenderTags from "./Tags.js";

function App() {
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <RenderTags />
        </div>
      </div>
    </div>
  );
}

export default App;
