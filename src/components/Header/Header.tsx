import './Header.css';
import des from '../../assets/icone/des.png'

function Header() {
    return (
        <div className='container_header'>
            <img className='header_img' src={des} alt='image de dés'></img>
        <h1>RandomSims</h1>
        <img className='header_img' src={des} alt='image de dés'></img>
        
        </div>
    )
}

export default Header;