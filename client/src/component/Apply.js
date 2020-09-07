import React from 'react';
import '../style/Apply.scss';
import Titlebar from './Titlebar';

const Apply = () => {
    return (
        <div className="apply">
            <div className="container">
                <Titlebar
                    title={"APPLY"}
                    note1={"앱앤미 지원을 결심하셨군요! 좋은 결과 있길 바랍니다 :)"}
                    note2={"* 제출 후 수정이 불가하니 신중히 작성해주세요."
                }/>
                
                <form className="apply-form">
                    <table className="apply-table">
                        <tr>
                            <td>학번</td>
                            <td className="temp"></td>
                            <td>이름</td>
                        </tr>
                        <tr>
                            <td><input type="number" name="sid" placeholder="학번을 입력해주세요"/></td>
                            <td className="temp"></td>
                            <td><input type="text" name="name" placeholder="이름을 입력해주세요"/></td>
                        </tr>
                        <tr>
                            <td colSpan="3">자기소개</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><textarea name="q1" placeholder="간단히 자신을 소개해주세요(최대 200자)"></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="3">지원동기</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><textarea name="q2" placeholder="앱앤미에 지원하게 된 동기를 알려주세요(최대 200자)"></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="3">다섯글자</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><input type="text" name="q3" placeholder="다섯글자로 나를 표현한다면?"/></td>
                        </tr>
                    </table>
                    <button type="submit" className="btn btn-pink fw-bold">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Apply;