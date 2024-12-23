import imageUniv from '../assets/imageUniv.jpg'

function Header(){
    return(
        <div>
        <h1>Introduction à React</h1>
        
        <img src={imageUniv} alt="logo" />
        <div>A la découverte des premières notions de React</div>
        </div>
    )
}

export default Header