const Title = () => {
    return <h1>Learn Web Development</h1>;
  };
  
  const Para = (props) => {
    return (
      <p>
        {props.le}
      </p>
    );
  };
  
  const MainContainer = () => {
  
    const paras = ["Welcome to the MDN learning area. The set of rticles aims to the guide complete beginners to web devlopment with all that they need to start coding webites", "The aim of this area of MDN The aim of this area of MDN is not to take you from beginner to expert but to take you from beginner to comfortable From there, you should be able to start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.", "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."]
  
    return (
      <div
        id="main-container"
        style={{ fontSize: "33px", color: "white", marginLeft:"200px", marginRight:"200px", color:"black"}}
      >
        <Title />
  
        {
          paras.map(para => <Para le={para} />)
        }
      </div>
    );
  };
  
  ReactDOM.render(<MainContainer />, document.querySelector("#root"));