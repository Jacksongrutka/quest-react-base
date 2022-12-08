import './content.css'
const Content = ({text, color}) => {
    return(
        <>
            <p className='content' style={{color:color}}>{text}</p>
        </>
    )
} 
Content.defaultProps = {
    color: 'red'
}

export default Content