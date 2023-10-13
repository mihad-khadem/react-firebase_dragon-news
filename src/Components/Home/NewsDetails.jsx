import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightNav from "../Navbar/RightSideNav/RightNav";
import Navbar from "../Navbar/Navbar";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3 border">
                    <h2 className="text-md">{id}</h2>


                </div>
                <div className="col-span-1">
                    <RightNav></RightNav>
                </div>
            </div>
            
        </div>
    );
};

export default NewsDetails;