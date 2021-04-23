import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const api = await res.json();

  return {
    props: { ninjas: api },
  };
};

const Ninjas = ({ ninjas }) => {
  console.log('THE API IS BELOW!');
  console.log(ninjas);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.data.map((ninja) => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>
              {ninja.first_name} {ninja.last_name}
            </h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
