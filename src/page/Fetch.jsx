import { useEffect, useState } from "react";
import UserImg from "./UserImg";

function Fetch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...🔒</div>;
  } else {
    return (
      <ul>
        {" "}
        <div className="list">
          {items.map((item) => (
            <li key={item.id}>
              <div className="container_list">
                <h1>New post comment</h1>
                {/* add img components */}
                <UserImg /> 
                <h2 className="user_email">{item.email}</h2>
                <h4 className="user_name"> {item.name}</h4>
                <p className="user_description">{item.body}</p>
              </div>
            </li>
          ))}
        </div>
      </ul>
    );
  }
}

export default Fetch;
