import "./footer.scss"
export default function Footer() {
    return (
        <footer className="footer_container" >
          <div className="footer_content"> 
          <div className="top_footer_content">
            <span>Return Policy</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
            <span>Request Personal Data</span>
          </div>
          <div className="mid_footer_content">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className="bot_footer_content">
            <span>© 2023, Zero Skateboards</span>
            <span> Powered by Shopify</span>
          </div>
          </div>
        </footer>

    )
}
