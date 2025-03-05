import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  const [eagerness, setEagerness] = useState('');

  const eagernessLevel = ['high', 'medium', 'low'];

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000), // Fixed ID generation
      text: input,
      eagerness: eagerness || 'low', // Ensure eagerness has a default value
    });

    setInput('');
    setEagerness('');
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level, index) => (
              <p key={index} onClick={() => setEagerness(level)}>
                {level === 'high' ? 'Must do' : level === 'medium' ? 'Want to do' : 'Take it or leave it'}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
