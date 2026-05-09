export default function Info() {
    return (
        <>
            <div className="info-profile">
                <img src="/myImage.png" alt="profile-pic" className="info-profile-pic" />
            </div>
            <div className="info-text">
                <h2 className="info-name">Sarkwah Abdul Razak</h2>
                <h4 className="info-title">Fullstack Developer | Graphic Designer</h4>
                <a href="https://react-business-card-delta.vercel.app/"  className="info-website">sarkwah.website</a>
                <div className="links">
                    <a href="mailto:abdulsarkwah@gmail.com" className="email-link">
                        <img src="/Mail.png" alt="mail icon" />
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-razak-sarkwah?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="linkedin-link">
                        <img src="/linkedin.png" alt="LinkedIn icon" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </>
    )
}
