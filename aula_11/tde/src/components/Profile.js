import Avatar from "./Avatar"

const Profile = ({name, profession, awards, discovered, srcImg}) => {
    return (
        <div style= {{ border: "1px solid black", borderRadius:"5px", padding:"5px", margin:"10px"}}>
            <h1>{name}</h1>
            <Avatar srcImg={srcImg} size={100} />
            <ul>
                <li><b>Profession:</b>{profession}</li>
                <li><b>Awards:</b> {awards}</li>
                <li><b>Discovered:</b> {discovered}</li>
            </ul>
        </div>
    )
}

export default Profile