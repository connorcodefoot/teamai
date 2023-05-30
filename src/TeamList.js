import React from "react";
import TeamMate from "./TeamMate";

function TeamList (props) {
  
  let teamList = props.teammates.all.map((teammate) => {
    return (
    <li id={teammate.id} onClick={() => props.onChange(teammate.id)} className={props.teammates.selected === teammate.id ? 'selected' : ''}>
    <TeamMate name={teammate.name} title={teammate.title}/>
    </li>
    )
  })
  return <ul >{teamList}</ul>
}

export default TeamList

// props.setTeammate(teammate.id)