import Marquee from "react-fast-marquee";

const Breaking = () => {
    return (
        <div className="flex">
            <button className="btn btn-error">Breaking News</button>
            <Marquee className="" pauseOnHover={true} autoFill={true}>Breaking News</Marquee>
        </div>
    );
};

export default Breaking;