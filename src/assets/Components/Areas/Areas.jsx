import { useLoaderData } from "react-router-dom";
import Area from "../Area/Area";

const Areas = () => {
    const areasObj = useLoaderData();
    const { meals } = areasObj;
    return (
        <div>
            <h2 className="text-4xl my-8 font-semibold italic">Areas : {meals.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    meals.map((meal, idx) => <Area key={idx} meal={meal}></Area>)
                }
            </div>
        </div>
    );
};

export default Areas;