import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
const Category = ({ category }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;
    const navigate = useNavigate();
    const handleCItems = () => {
        navigate(`/citems/${strCategory}`);
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[800px]">
                <figure><img src={strCategoryThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <p>{strCategoryDescription}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleCItems} className="btn bg-yellow-500 text-yellow-800 w-full">See Items</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object
}
export default Category;