const MovieReview = ({ reviewProp }) => {

    //destrutturazione prop
    const { name, vote, text } = reviewProp

    return (
        <div className="review">
            <div className="card-body">
                <p className="user-review">
                    <strong>Review: </strong> {text}
                </p>
                <p>
                    <strong>
                        Vote: {vote}
                    </strong>
                </p>
                <address>
                    <i>
                        <strong>By: </strong> {name}
                    </i>
                </address>

            </div>
        </div>
    )

}
export default MovieReview