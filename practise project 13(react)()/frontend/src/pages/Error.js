import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>could not fetch!</p>
      </main>
    </>
  );
};

export default ErrorPage;