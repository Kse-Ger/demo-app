export const getStaticPaths = async () =>{
    const res = await fetch ("http://localhost:8080/api/v1/all");
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch ("http://localhost:8080/api/v1/" + id);
    const data = await res.json(); 

    return {
        props: {ninja: data}
    }
}

const User = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>City: {ninja.city}</p>
            <p>Age: {ninja.age}</p>
        </div>
     );
}
 
export default User;