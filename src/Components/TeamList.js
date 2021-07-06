import React from 'react';


const TeamList = props => {
    return (
        <div>
            {props.team.map(member => {
                return (
                    <div key ={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <p>{member.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamList;