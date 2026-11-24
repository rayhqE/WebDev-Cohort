import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => {
      //cleanup
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal },
        );
        const data = await response.json();
        setPosts(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setStatus("Error");
        }
      }
    }
    loadPost();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div>
        <h1>useEffect</h1>
        <h1>{seconds}</h1>
        <h1>
          {posts.map((post) => (
            <article>
              <p>{post.id}</p>
              <br />
            </article>
          ))}
        </h1>
      </div>
    </>
  );
}

export default App;
