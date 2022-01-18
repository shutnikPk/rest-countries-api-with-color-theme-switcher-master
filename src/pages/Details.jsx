import { useParams } from "react-router-dom";

const Details = () => {
    const { name } = useParams()
    return (
        <div>
            Country: {name}
        </div>
    );
}

export default Details;