
import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
        <Layout title="Home"> 
            <Link href="/about"> 
                <a>go to about</a> 
            </Link>
            <p> welcome to index file</p> 
        </Layout>
    );
