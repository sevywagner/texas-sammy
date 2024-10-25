import { useState } from "react";

const { default: MemberForm } = require("../../Components/Council/MemberForm");

const UpdateMembers = () => {
    const defaultMember = {
        name: '',
        position: 'Chair',
        committee: 'A',
        image: null,
        year: 0,
        email: ''
    };

    const [memberNum, setMemberNum] = useState([1]);
    const [members, setMembers] = useState([defaultMember]);
    const [type, setType] = useState("Council");

    const addMemberHandler = () => {
        setMemberNum((prevState) => [...prevState, prevState.length + 1]);
        setMembers((prevState) => [...prevState, defaultMember]);
    }

    const changeHandler = (member, num) => {
        let newState = members;
        newState[parseInt(num) - 1] = member;
        setMembers(newState);
    }

    const radioChangeHandler = (event) => {
        setType(event.target.value)
    }

    const submitHandler = () => {
        const files = members.map((member) => member.image);
        const memberList = members.map((m) => {
            if (m.committee === '') {
                m.committee = 'A';
            }

            if (m.committee === 'R' && m.position === '') {
                m.position = 'Chair';
            }
            return m;
        });

        const data = new FormData();
        data.append("members", JSON.stringify(memberList));
        data.append("type", type);
        if (type === 'Council') {
            for (const image of files) {
                data.append('images', image)
            }
        }

        fetch('https://texas-sammy-backend.onrender.com/update', {
            method: 'POST',
            body: data
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
        })
    }

    return (
        <div>
            <input type="radio" value="Council" checked={type === "Council"} onChange={radioChangeHandler} /> Council
            <input type="radio" value="Committees" checked={type === "Committees"} onChange={radioChangeHandler} /> Committees
            {memberNum.map((num) => <MemberForm key={num} num={num} onChange={changeHandler} council={type === "Council"} />)}
            <button onClick={addMemberHandler}>Add Member</button>
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}

export default UpdateMembers;