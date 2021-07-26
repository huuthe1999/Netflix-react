import "./feature.scss";
import imageAvatar from "assets/images/avatar.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";
const Feature = ({ type }) => {
    return (
        <div className="feature">
            {type ? (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            ) : (
                ""
            )}
            <img src={imageAvatar} alt="avatar" />
            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, quibusdam dicta quae inventore dolorem expedita
                    animi perspiciatis optio assumenda voluptas autem delectus,
                    debitis cumque fuga aliquid, facilis corrupti minus commodi.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
