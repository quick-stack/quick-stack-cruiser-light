import 'twin.macro';

const Landing = () => {
  const { APP_NAME } = process.env;

  return (
    <p tw="border hover:border-black">
      Welcome to
      {' '}
      {APP_NAME}
    </p>
  );
};

export default Landing;
