import { useParams, useHistory } from "react-router-dom";
import useFetch from "./fetch";

const Blogdetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const { blogs, ispending, error } = useFetch("/data/db.json");

  const blog = blogs ? blogs.find(b => b.id === id) : null;

  return (
    <div className="blogdetails">
      {ispending && <div>Loading..</div>}
      {error && <div>{error}</div>}

      {blog && (
        <div className="article1">
          <article>
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
            <div className="a1">{blog.body}</div>
          </article>

          <button onClick={() => history.push("/")}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogdetails;
