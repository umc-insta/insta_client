

function Login() {
    return (
        <div class="loginMain">
            <div class="title">
                <h1>
                    로그인
                </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <label>
                        <input placeholder="아이디" style={{ background: "transparent", border: 'none', borderBottom: "1px solid black" }} />
                    </label>
                    <label>
                        <input placeholder="비밀번호" style={{ background: "transparent", border: 'none', borderBottom: "1px solid black" }} />
                    </label>

                </form>
                <button style={{
                    backgroundColor: "#333333",
                    color: "white",
                    border: "none",
                    width: "30%",
                    padding: "1% 0 1% 0",
                    borderRadius: "5px",
                    marginBottom: "5%"
                }}>로그인</button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                <button style={{ background: "transparent", border: "none" }}>회원가입</button>
                <p>|</p>
                <button style={{ background: "transparent", border: "none" }}>아이디/비밀번호 찾기</button>
            </div>
        </div >
    )
}

export default Login;