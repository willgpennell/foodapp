import { useState, useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    function demo() {
      console.log("Demo Function executed!!!");
    }
    demo();
  }, [query]);
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </>
  );
}
