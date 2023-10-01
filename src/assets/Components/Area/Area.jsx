import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Area = ({ meal }) => {
    const { strArea } = meal;

    return (
        <div>
            <Link to={`/areaitems/${strArea}`}><button className="bg-yellow-500 m-2 p-8 text-3xl w-full font-semibold rounded-lg hover:bg-yellow-600 text-yellow-800">{strArea}</button></Link>
        </div>
    );
};
Area.propTypes = {
    meal: PropTypes.object
}
export default Area;