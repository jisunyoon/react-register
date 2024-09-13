import { useState } from "react";
const Register = () => {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) =>{
        setName(e.target.value);
    }
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeBio = (e) => {
        setBio(e.target.value);
    }
    
    return (
        <div className="register-form">
            <div className="register-form__col">
                <input type="text" value={name} onChange={onChangeName} placeholder="이름"/>
            </div>
            <div className="register-form__col">
                <input type="date" value={birth} onChange={onChangeBirth}/>
            </div>
            <div className="register-form__col">
                <select className="register-form__select" value={country} onChange={onChangeCountry}>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="cn">중국</option>
                </select>
            </div>
            <div className="register-form__col">
                <textarea value={bio} onChange={onChangeBio} />
            </div>
            <div className="register-form__col">
                <button className="register-form__button" type="button">제출</button>
            </div>
        </div>
    )
}

export default Register;