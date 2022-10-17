import {Helmet} from "react-helmet";

import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="404"
                    content="404 error"
                    />
                <title>Error 404</title>
            </Helmet>
            <ErrorMessage/>
            <p>404 not found</p>
            <Link to="/">Main page</Link>
        </div>
    )
}   

export default Page404;