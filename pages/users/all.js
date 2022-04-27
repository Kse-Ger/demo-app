import Link from "next/link";
import styles from "../../styles/Home.module.css"

export const getStaticProps = async () => {
    const res = await fetch ("http://localhost:8080/api/v1/all");
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}

const AllUsers = ({ninjas}) => {
    return ( 
        <div>
            <h1>All ninjas</h1>
            {ninjas.map(ninjas => (
                <Link href={'/users/'+ninjas.id} key={ninjas.id}>
                    <a className={styles.single}>
                        <h3>{ninjas.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default AllUsers;