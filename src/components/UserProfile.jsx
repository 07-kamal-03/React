const UserData=[
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'KAMALRAJ',
        place: 'Pagadapadi',
        description: 'Front-end developer',
        status: true,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images.jfif'

    },
    {
        name: 'Gowtham',
        place: 'Sankagiri',
        description: 'Front-end developer',
        status: false,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/download.jfif'

    },
    {
        name: 'Manoj',
        place: 'Coimbatore',
        description: 'Front-end developer',
        status: false,
        skills: ['Java','C','SQL','Javascript','HTML','CSS','Drupal'],
        profile: 'Images/images (1).jfif'

    }
]
function User(props) {
    return <div className="container">
        <span className={props.status ? "pro online" : "pro offline"}>{props.status ? "ONLINE" : "OFFLINE"}</span>
        
        <img className="img" src={props.profile}></img>
        
        <h3>{props.name}</h3>
        <h3>{props.place}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill, index) => (<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
}

const UserProfile = () => {
  return (<>
    {
    UserData.map((user,index)=>(
        <User key={index}
        name={user.name}
        place={user.place}
        description={user.description}
        status={user.status}
        skills={user.skills}
        profile={user.profile} />

    ))}

    {/* <User name="Kamalraj" place="Pagadapadi" description="Front-end developer" skills={['Java','Sql','Javascript','C','React']} online={true} /> */}
</>
);
}
export default UserProfile;
