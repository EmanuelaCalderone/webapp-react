const MovieReview = ({ reviewProp }) => {

    //destrutturazione prop
    const { name, vote, text } = reviewProp

    return (
        <div className="review">
            <div className="card-body">
                <p className="card-text">
                    {text}
                </p>
                <strong>
                    Vote: {vote}
                </strong>
                <address>
                    <i>
                        By {name}
                    </i>
                </address>
            </div>
        </div>
    )

}
export default MovieReview