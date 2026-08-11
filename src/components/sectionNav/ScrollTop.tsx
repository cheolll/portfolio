import { useEffect, useState } from "react";
import "./ScrollTop.css"

const ScrollTop = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            type="button"
            className={`scroll-top ${visible ? 'active' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <span>↑</span>
        </button>
    )


}

export default ScrollTop;