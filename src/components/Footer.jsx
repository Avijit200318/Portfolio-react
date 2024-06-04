import React from "react";

function Footer()
{
    return(
        <>
        <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; {new Date().getFullYear()} by Avijit.</p>
        </div>

        <div className="footer-iconTop"><a href=""><i className="fa-solid fa-arrow-up"></i></a></div>
    </footer>
        </>
    )
}
export default Footer;