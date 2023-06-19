import './footer.css';

export default function Footer() {
    return (
        <footer>
            <section className="card">
                <h2>Contact me</h2>
                <form>
                    <label>Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="email" />
                    <label>Message</label>
                    <input type="message" />
                </form>
                <div className='bottom-row'>
                    <button>Send message</button>
                </div>
            </section>
            <p>&copy; {new Date().getFullYear()} Zhan Xiang Zheng. All rights reserved.</p>
        </footer>
    )
}

