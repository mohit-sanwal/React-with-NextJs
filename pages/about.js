import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
    <Layout title="About">
        <Link href="/">
        <a>go to index</a>  
        </Link>
        <p> welcome to about file</p> 
        <img src = "../static/images/img1.png"  alt="JavaScript" height="200" />
    </Layout>
)
