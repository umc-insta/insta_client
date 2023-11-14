import styled from 'styled-components';
import Feed from '../../component/feed';
import { Link } from 'react-router-dom';

const Topbar = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function Home() {

    const UserProfile = [{
        nickname: "skuukzky",
        profileSrc: "./suzy/suzy_profile.jpeg",
        feedSrc: "./suzy/suzy_feed.jpeg",
        content: "인간의 지능과 기술의 발전으로 현대 사회는 예전과는 다른 모습으로 진화했습니다. 정보의 공유는 클릭 한 번으로 이뤄지며, 세계 각지의 사람들이 온라인을 통해 연결되어 있습니다. 이로 인해 새로운 산업과 직업이 등장하고, 일상 생활에서 기술의 역할은 더이상 무시할 수 없는 요소가 되었습니다. ",
    },
    {
        nickname: "skuukzky",
        profileSrc: "./suzy/suzy_profile.jpeg",
        feedSrc: "./suzy/suzy_feed.jpeg",
        content: "인간의 지능과 기술의 발전으로 현대 사회는 예전과는 다른 모습으로 진화했습니다. 정보의 공유는 클릭 한 번으로 이뤄지며, 세계 각지의 사람들이 온라인을 통해 연결되어 있습니다. 이로 인해 새로운 산업과 직업이 등장하고, 일상 생활에서 기술의 역할은 더이상 무시할 수 없는 요소가 되었습니다. ",
    }]

    return (
        <div>
            <Topbar>
                <img src="instagram_logo.png" style={{ margin: "0.5%", height: "90%" }} />
                <div style={{ margin: "0.5%", height: "90%"}}>
                    <Link to='./add'>
                    <img src="./icons/add.png" style={{ height: "100%", padding: "5%" }}></img>
                    </Link>
                </div>
            </Topbar>
            <div>
               {UserProfile.map((User) => {
                return(
                    <Feed UserProfile={User} />)
                })}
            </div>
        </div>
    )
}

export default Home;