export const getStaticPaths = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const api = await res.json();

  const paths = api.data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default Details;

// name the page component in brackets [id] to tell Next.js that the id is changeable
