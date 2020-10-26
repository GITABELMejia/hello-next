
import Head from 'next/head';
import Container from '../components/Container';
import fetch from 'isomorphic-fetch'

import Users from '../components/Users'


const Index = (props) => {    
    return (
        <div>
            <Container>
                <Head>
                    <title>
                        Next.js Project | Home
                    </title>
                </Head>

                <h1>Next</h1>

                <Users
                    users = {props.users}
                />


                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dolores minus porro, provident labore et nulla amet. Magni, consequatur necessitatibus quod, alias architecto quibusdam voluptates repellendus dolor, commodi nesciunt quidem!</p>
            </Container>
        </div>
    );
}
Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJSON = await res.json();
    return {users:resJSON.data}
}

export default Index;