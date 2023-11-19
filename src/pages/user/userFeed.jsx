import React from 'react'
import { useLocation } from 'react-router-dom';
import Feed from '../../component/feed';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Topbar = styled.div`
  height: 50px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function UserFeed() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <Topbar>
                <button
                    type="button"
                    style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        width: "10vw",
                        height: "10vh"
                    }}
                    onClick={() => navigate(-1)}
                >
                    <img
                        style={{ width: "50%", height: "30%" }}
                        src="/user_icons/free-icon-backward.png"
                        alt="뒤로가기"
                    />
                </button>
            </Topbar>
            <Feed UserProfile={state.post} />
        </div>
    )
}
