import React, { useEffect, useState } from 'react';
import { fetchWithTimeout } from '../../utilities/utils';
import { createServer } from "miragejs";

let server = createServer()
server.get("/items", () => {
  return new Promise(resolve => setTimeout(resolve, 2000)).then(() => true);
})

const Video4 = () => {
  const [data, setData] = useState("loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWithTimeout('/items', {
          timeout: 1000
        });
        const nextData = await response.json();
        return "Call finished successfully";

      } catch (error) {
        return "Error";
      }
    };
    fetchData().then((nextData) => {
      setData(nextData)
    });
  }, [{ title: 'error retrieving data' }]);
  return (
    <div>
      {data}
    </div>
  );
}
export default Video4;
