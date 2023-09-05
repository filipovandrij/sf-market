import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className="footer_box">
            <div className="contacts">
                <h4>Contacts</h4>
                <ul className="list">
                    <li>0 123 31231 123</li>
                    <li>contact.center@sfmarket.ua</li>
                    <li>07:30 - 21:00</li>
                </ul>
            </div>
            <div className="adress">
                <h4>Our stores</h4>
                <ul className="list">
                    <li>Kyiv, Poliarna Street, 17A</li>
                    <li>Kyiv, Brovarsky Avenue, 3B</li>
                    <li>Kyiv, Saperno-Slobidska Street, 26</li>
                    <li>Odesa, Pivdenna Doroha (Southern Road), 101</li>
                </ul>
            </div>

            <div className="help">
                <h4>Help</h4>
                <ul className="list">
                    <li>Delivery and Payment</li>
                    <li>Return of Goods</li>
                    <li>Loyalty Program</li>
                    <li>Services</li>
                    <li>Credit</li>
                    <li>How to Create an Account</li>
                </ul>
            </div>
            <div className="about_company">
                <h4>About the company</h4>
                <ul className="list">
                    <li>About Us</li>
                    <li>Terms of Use of the Website</li>
                    <li>Privacy Policy</li>
                    <li>Low Prices Every Day</li>
                    <li>For Partners</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer
