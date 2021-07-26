import "./list.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ListItem from "./../listItem/ListItem";
const List = () => {
    return (
        <div className="list">
            <span className="listTitle">Continous to watch</span>
            <div className="wrapper">
                <ArrowBackIcon className="sliderArrow left" />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIcon className="sliderArrow right" />
            </div>
        </div>
    );
};

export default List;
