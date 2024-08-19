import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../appStore/features/todo/todoSlice";
import { useSelector } from "react-redux";
import { Get } from "../lib/apiWrapper";
const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => state.todo.todos);

  useEffect(() => {
    setLoading(true);
    Get("/posts").then((res) => {
      if (res) {
        dispatch(addTodo(res));
        setLoading(false);
        console.log(res);
      } else {
        setLoading(false);
        return "error";
      }
    });
    console.log(data);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <div className="container">
        <h5>Hello, This is Home Page </h5>
        {loading? <h1>Loading...</h1>:''}
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
