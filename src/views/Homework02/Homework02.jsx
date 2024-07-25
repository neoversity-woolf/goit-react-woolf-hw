const btnStyles = {
  margin: 5,
  padding: '10px 20px',
  border: '1px solid lightblue',
  borderRadius: 10,
};

const Homework02 = () => {
  const handleClick = e => {
    console.log(e);
  };

  return (
    <div>
      <p>Page 02</p>
      <button style={btnStyles} onClick={handleClick}>
        Click ✅
      </button>
      <button style={btnStyles} onClick={() => handleClick(123)}>
        Click 🎉
      </button>
    </div>
  );
};

export default Homework02;
