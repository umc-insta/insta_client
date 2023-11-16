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

    // const PostList = [
    //     {
    //         "nickname": "skuukzky",
    //         "profileSrc": "./suzy/suzy_profile.jpeg",
    //         "photo_url": "./suzy/suzy_feed.jpeg",
    //         "content": "인간의 지능과 기술의 발전으로 현대 사회는 예전과는 다른 모습으로 진화했습니다. 정보의 공유는 클릭 한 번으로 이뤄지며, 세계 각지의 사람들이 온라인을 통해 연결되어 있습니다. 이로 인해 새로운 산업과 직업이 등장하고, 일상 생활에서 기술의 역할은 더이상 무시할 수 없는 요소가 되었습니다. ",
    //         "comments": [
    //             {
    //                 "comment_id": "101",
    //                 "username": "comment_user1",
    //                 "text": "댓글 내용 1"
    //             },
    //             {
    //                 "comment_id": "102",
    //                 "username": "comment_user2",
    //                 "text": "댓글 내용 2"
    //             }
    //         ]
    //     },

    //     {
    //         "nickname": "skuukzky",
    //         "profileSrc": "./suzy/suzy_profile.jpeg",
    //         "photo_url": "./suzy/suzy_feed.jpeg",
    //         "content": "인간의 지능과 기술의 발전으로 현대 사회는 예전과는 다른 모습으로 진화했습니다. 정보의 공유는 클릭 한 번으로 이뤄지며, 세계 각지의 사람들이 온라인을 통해 연결되어 있습니다. 이로 인해 새로운 산업과 직업이 등장하고, 일상 생활에서 기술의 역할은 더이상 무시할 수 없는 요소가 되었습니다. ",
    //         "comments": []
    //     }]

    const [postList, setPostList] = useState([]);

    useEffect(() => {

        const fetchData = async () => {const axiosInstance = axios.create({
            baseURL: "http://15.165.161.132:8080/",
        });
        try {
            const response = await axiosInstance.get("/api/posts/")
            console.log("postList: ", response.data);
            setPostList(response.data);
        }
        catch (error) {
            console.log(error);
        }}

        fetchData();

    },[]);

    useEffect(() => {
        console.log("ois", postList);
    }, [postList]);

    return (
        <div>
            <Topbar>
                <img src="instagram_logo.png" style={{ margin: "0.5%", height: "90%" }} />
                <div style={{ margin: "0.5%", height: "90%" }}>
                    <Link to='/add'>
                        <img src="./icons/add.png" style={{ height: "100%", padding: "5%" }}></img>
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