const Landing = () => {
  const { APP_NAME } = process.env;

  return (
    <p>
      Welcome to
      {' '}
      {APP_NAME}
    </p>
  );
};

export default Landing;
