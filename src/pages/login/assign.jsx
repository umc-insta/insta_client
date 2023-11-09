

function Assign() {
    return (
        <div>
            <div class="title">
                <h1>회원 가입</h1>
            </div>
            <form style={{display: "flex", flexDirection: "column"}}>
                <label>
                    이름<br />
                    <input id="name" />
                    {/* <p id="name_error">필수 입력 항목입니다!</p> */}
                </label>
                <label>
                    닉네임<br />
                    <input id="nickname" />
                    {/* <p id="nickname_error">닉네임은 2~5글자로 구성해주세요!</p> */}
                </label>
                <label>
                    이메일<br />
                    <input id="email" />
                    {/* <p id="email_error">올바른 메일 형식이 아닙니다!</p> */}
                </label>
                <label>
                    비밀번호<br />
                    <input id="password" type="password" />
                    {/* <p id="password_error">영어+숫자+특수문자를 조합하여 작성해주세요.</p> */}
                </label>
                <label>
                    비밀번호 확인<br />
                    <input id="check" type="password" />
                    {/* <p id="check_error">비밀번호가 일치하지 않습니다.</p> */}
                </label>
                <div class="button">
                    <button id="submit" disabled="">가입하기</button>
                </div>
            </form>
            {/* <div id="success_back" style={{display: "none"}}>
                <div id="success">
                    <div id="success_main">
                        <h2 id="success_h">가입 성공!</h2>
                        <p id="success_para">umc 챌린저 가입을 축하합니다!!</p>
                    </div>
                    <div id="success_btn">
                        <button >닫기</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Assign;