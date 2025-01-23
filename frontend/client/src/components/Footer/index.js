import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/logo.png" alt="HackSpace Logo" className="footer-logo-image" />
                </div>
                <div className="footer-description">
                    <p>
                        HackSpace is the ultimate virtual hackathon platform, where innovators, coders, and creators come together to collaborate and build exceptional projects.
                    </p>
                </div>
                <p className="copyright">
                    © {currentYear} HackSpace. All rights reserved.
                </p>
                <div className="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img src="/twitter-logo.png" alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <img src="/github-logo.png" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <img src="/linkedin-logo.png" alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
