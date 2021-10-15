import landing from '../images/reading-room.jpg';

const Landing = () => {
  return (
    <div className="landing">
      <img src={landing} alt="Inside a library" className="landing__img" />
      <h1 className="landing__title">Books.</h1>
      <h2 className="landing__subtitle">Read em & weep</h2>
    </div>
  );
};

export default Landing;
