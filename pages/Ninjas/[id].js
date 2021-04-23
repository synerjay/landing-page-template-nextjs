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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://reqres.in/api/users/' + id);
  const api = await res.json();

  return {
    props: { ninja: api.data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>
        {ninja.first_name} {ninja.last_name}
      </h1>
      <p>{ninja.email}</p>
      <p>{ninja.avatar}</p>
    </div>
  );
};

export default Details;

// name the page component in brackets [id] to tell Next.js that the id is changeable
