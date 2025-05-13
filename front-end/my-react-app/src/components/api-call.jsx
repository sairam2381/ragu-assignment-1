import { useEffect, useState } from "react";

const ApicallComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
};

export default ApicallComponent;
