import Narbar from "components/narbar/Narbar";
import Feature from "components/feature/Feature";
import List from "components/list/List";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Narbar />
            <Feature />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;
