import { useState, useEffect } from "react";

export function useStarWarsPeople(id = "") {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + id)
      .then((response) => response.json())
      .then((body) => setPeople(body.results || body))
      .finally(() => setLoading(false));
  }, [id]);

  return [people, loading];
}
