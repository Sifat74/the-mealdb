import { useLoaderData } from "react-router-dom";
import CItem from "../CItem/CItem";

const CItems = () => {
    const cItemsAll = useLoaderData();
    const { meals } = cItemsAll;
    return (
        <div>
            <h2 className="text-4xl my-8 font-semibold italic">{meals.length} Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    meals.map((meal, idx) => <CItem key={idx} meal={meal}></CItem>)
                }
            </div>
        </div>
    );
};
export default CItems;