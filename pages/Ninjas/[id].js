// The purpose of the getStaticPaths is to let Next.js know how many dynamic pages are needed for the api
// Next.js will run the getStaticPaths and then will run the getStaticProps to inject the information into the Details props
// We need two of these to build dynamic pages in Next based on the REST API

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
      <img src={ninja.avatar} />
    </div>
  );
};

export default Details;

// name the page component in brackets [id] to tell Next.js that the id is changeable
