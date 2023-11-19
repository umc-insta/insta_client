import styled from 'styled-components';
import Feed from '../../component/feed';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';

const Topbar = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function Home() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const axiosInstance = axios.create({
            baseURL: "http://3.35.11.221:8080/",
        });
        try {
            const response = await axiosInstance.get("/api/posts/")

            setPostList(response.data);
        }
        catch (error) {
            console.log(error);
        }}

        fetchData();

    },[]);
    
    return (
        <div>
            <Topbar>
                <img src="instagram_logo.png" alt="instagramLogo" style={{ margin: "0.5%", height: "90%" }} />
                <div style={{ margin: "0.5%", height: "90%" }}>
                    <Link to='/add'>
                        <img src="./icons/add.png" alt="add" style={{ height: "100%", padding: "5%" }}></img>
                    </Link>
                </div>
            </Topbar>
            <div>
                {postList.map((User, index) => {
                    return (
                        <Feed UserProfile={User} key={index} />)
                })}
            </div>
        </div>
    )
}

export default Home;