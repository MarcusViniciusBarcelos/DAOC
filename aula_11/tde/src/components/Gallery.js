import Profile from "./Profile"

const Gallery = ({ title }) => {
    return(
        <>
            <h1 style={{margin: "10px"}}>{ title }</h1>
            <Profile name="Maria" profession="doida" awards="maluca" discovered="malucosa" srcImg="https://i.imgur.com/szV5sdG.jpeg" />
            <Profile name="ferger" profession="erger" awards="ergerg" discovered="ergerer" srcImg="https://i.imgur.com/YfeOqp2.jpeg"/>
        </>
    )
}

export default Gallery