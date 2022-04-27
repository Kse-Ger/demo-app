import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from "../styles/Home.module.css";

const Home = () => {
  return ( 
    <div className={styles.title}>
      <h2>Homepage</h2>
      <Link href="/users/all"><a className={styles.btn}>See all ninjas</a></Link>
    </div>
   );
}
 
export default Home;