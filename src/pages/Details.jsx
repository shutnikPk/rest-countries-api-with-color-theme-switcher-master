const Details = ({ match }) => {
    return (
        <div>
            {match.params.name}
        </div>
    );
}

export default Details;