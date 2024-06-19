export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer id="footer">
            <p className="pb-3">copyright &copy; {currentYear}</p>
        </footer>
    );
}