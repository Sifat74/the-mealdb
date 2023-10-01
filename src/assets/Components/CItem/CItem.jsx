import PropTypes from 'prop-types';
const CItem = ({ meal }) => {
    const { strMeal, strMealThumb } = meal;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='p-4' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                </div>
                <button className='bg-yellow-500 m-3 rounded-md h-10 font-semibold text-yellow-800 hover:bg-yellow-600'>Order Now</button>
            </div>
        </div>
    );
};
CItem.propTypes = {
    meal: PropTypes.object
}
export default CItem;