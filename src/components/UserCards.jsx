function UserCards(props) {
    return (
        <div className="cards" id={props.user.login.uuid}>
            <img src={props.user.picture.thumbnail} alt="" />
            <div className="details">
                <p className="name">
                    {props.user.name.title} {props.user.name.first} {props.user.name.last}
                </p>
                <p className="email">
                    {props.user.email}
                </p>
            </div>
        </div>
    )
}


export default UserCards;