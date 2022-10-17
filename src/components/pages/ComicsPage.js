import {Helmet} from "react-helmet";

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {

    return(
        <>
            <Helmet>
                <meta
                    name="description comics"
                    content="Comics"
                    />
                <title>Marvel's Comics</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;