import "./listItem.scss";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
const ListItem = () => {
    return (
        <div className="listItem">
            <img
                src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                alt=""
            />
            <div className="itemInfo">
                <div className="icons">
                    <PlayCircleFilledIcon />
                    <AddIcon />
                    <ThumbUpAltOutlinedIcon />
                    <ThumbDownOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default ListItem;
