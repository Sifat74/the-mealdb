const HomePage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-yellow-500">Welcome to The Meal<span className="text-yellow-800 font-extrabold">DB</span></h1>
                        <p className="py-6">Welcome to The MealDB: An open, crowd-sourced database of Recipes from around the world.
                            We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
                        <button className="btn bg-yellow-500">PayPal</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;