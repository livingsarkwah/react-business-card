export default function Info() {
    return (
        <div className="info">
            <div className="info-profile">
                <img src="/myImage.png" alt="profile-pic" className="info-profile-pic" />
            </div>
            <div className="info-text">
                <h2 className="info-name">Sarkwah Abdul Razak</h2>
                <h4 className="info-title">Frontend Developer</h4>
                <p className="info-website">sarkwah.website</p>
                <div className="links">
                    <a href="http:/gmail.com" className="email-link">
                        <img src="/Mail.png" alt="mail icon" />
                        <span>Email</span>
                    </a>
                    <a href="http:/linkedin.com" className="linkedin-link">
                        <img src="/linkedin.png" alt="LinkedIn icon" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
