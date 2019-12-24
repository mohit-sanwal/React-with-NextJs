import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

// export default () => (
//     <Layout title="About">
//         <Link href="/">
//         <a>go to index</a>  
//         </Link>
//         <p> welcome to about file</p> 
//         <img src = "../static/images/img1.png"  alt="JavaScript" height="200" />
//     </Layout>
// )


export default class About extends React.Component {

    // state = {
    //     user: null
    // }


    // with server rendered app
    // static getInitialProps() {
    //     fetch('https://api.github.com/users/reedbarger')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("data", data)
    //     })
    //     
    //      /** Error: "About.getInitialProps()" should resolve to an object. But found "undefined" instead.
    //       * to resolve this error we will return an object
    //       */

    //       return {user: "user"};
    // }

    /** another way to  */

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/reedbarger')
        const data = await res.json();
        return {user: data};
    }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/reedbarger')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             user: data
    //         });
    //     })
    /** as fetch is the browser api and we are rendering on server side so it will throw an error 
    //      * that fetch is not defined */
    // }

    render() {
        const { user } = this.props;
        return(
            <Layout title="About">
                  {/* {JSON.stringify(this.props.user)} */}
                <p> {user.name} </p>
                <img 
                src = {user.avatar_url}  
                alt="JavaScript" 
                height="200" />
            </Layout>
        )
    }
}


// About.getInitialProps = () => {

// }