import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleevent = (e) => {
    e.preventDefault();
    alert("Fake API cannot save. This is static mode.");
    history.push("/");
  };

  return (
    <div className="create">
      <form onSubmit={handleevent}>
        <h1>welcome to blogs creation page</h1>

        <label>Enter your title:</label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />

        <label>enter your blog:</label>
        <input type="text" required value={body} onChange={(e)=>setBody(e.target.value)} />

        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <button>submit</button>
      </form>
    </div>
  );
};

export default Create;
