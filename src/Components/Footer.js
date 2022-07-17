export default function Footer() {
    return (
        <footer className="footer">
            <p className="line-1">Join the Adventure newsletter to receive our best vacation deals</p>
            <p className="line-2"> You can unsubscribe at any time. </p>
            <input type="email" placeholder="Your Email" />
            <span className="subscribe-btn"> Subscribe </span>
            <div className="row">
                <div className="coll-1">
                    <h1> About Us </h1>
                    <ul>
                        <li> How it works </li>
                        <li> Testimonials </li>
                        <li> Careers </li>
                        <li> Investors </li>
                        <li> Terms of Service </li>
                    </ul>
                </div>
                <div className="coll-2">
                    <h1> Contact Us </h1>
                    <ul>
                        <li> Contact </li>
                        <li> Support </li>
                        <li> Destinations </li>
                        <li> Sponsorships </li>
                    </ul>
                </div>
                <div className="coll-3">
                    <h1> Videos </h1>
                    <ul>
                        <li> Submit Video </li>
                        <li> Ambassdors </li>
                        <li> Agency </li>
                        <li> Influencer </li>
                    </ul>
                </div>
                <div className="coll-4">
                    <h1> Social Media </h1>
                    <ul>
                        <li> Instagram </li>
                        <li> Facebook </li>
                        <li> Youtube </li>
                        <li> Twitter </li>
                    </ul>
                </div>
            </div>
            <span className="last-line"> Mangat © 2022 </span>
        </footer>
    )
}
