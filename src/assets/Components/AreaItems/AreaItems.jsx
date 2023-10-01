import { useLoaderData } from "react-router-dom";
import AreaItem from "../AreaItem/AreaItem";

const AreaItems = () => {
    const areaItems = useLoaderData();
    const { meals } = areaItems;
    return (

        <div>
            <h2 className="text-4xl my-8 font-semibold italic">Total Items : {meals.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    meals.map((meal, idx) => <AreaItem key={idx} meal={meal}></AreaItem>)
                }
            </div>
        </div>
    );
};

export default AreaItems;