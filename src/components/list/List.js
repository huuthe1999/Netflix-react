import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ListItem from "./../listItem/ListItem";
import { useRef, useState } from "react";
import "./list.scss";

const List = () => {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const handleClick = (direction) => {
        const distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left") {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber - 1);
        }
        if (direction === "right") {
            listRef.current.style.transform = `translateX(${
                -230 + distance
            }px)`;
            setSlideNumber(slideNumber + 1);
        }
    };

    return (
        <div className="list">
            <span className="listTitle">Continous to watch</span>
            <div className="wrapper">
                {slideNumber > 0 && (
                    <ArrowBackIcon
                        className="sliderArrow left"
                        onClick={() => handleClick("left")}
                    />
                )}
                <div className="container" ref={listRef}>
                    <ListItem />
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
                {slideNumber < 4 && (
                    <ArrowForwardIcon
                        className="sliderArrow right"
                        onClick={() => handleClick("right")}
                    />
                )}
            </div>
        </div>
    );
};

export default List;
