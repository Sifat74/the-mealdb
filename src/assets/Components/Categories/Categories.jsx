import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
    const categoriesAll = useLoaderData();
    const { categories } = categoriesAll

    return (
        <div>
            <h2 className="text-4xl my-8 font-semibold italic">Categories</h2>
            <div className="grid lg:grid-cols-2 gap-4">
                {
                    categories.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;