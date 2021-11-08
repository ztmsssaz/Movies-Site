import { Link } from "react-router-dom";
import Style from "./style";
function Page404() {
    document.title = "Not Found";
    return (
        <Style>
            <section className="container py-5">
                <div className="d-flex flex-wrap align-items-center justify-content-center text-center">
                    <div className="image">
                        <img src="/images/background/crying.png" alt="crying character" />
                    </div>
                    <div>
                        <h5>Oops! We can't find the page you're looking for</h5>
                    </div>
                </div>
                <div className="text-center">
                    <Link className="btn btn-primary" to={'/'}>
                        Back to Home
                    </Link>
                </div>
            </section>
        </Style>
    )
}
export default Page404;