import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react'


function CompanyResult(props) {


  return (
    <div>
        <p>{props.companyName}</p>

        <div className="rowSideBySide">
            <div className="row">
                Glassdoor
                <br/>
                <a href={"https://www.glassdoor.com/Search/results.htm?keyword=" + props.companyName} target="_blank">Link</a>
            </div>
            <div className="row">
                LinkedIn
                <br/>
                <a href={"https://www.linkedin.com/company/" + props.companyName} target="_blank">Link</a>
            </div>
            <div className="row">
                CrunchBase
                <br/>
                <a href={"https://www.crunchbase.com/organization/" + props.companyName} target="_blank">Link</a>
            </div>
            <div className="row">
                Levels.fyi
                <br/>
                <a href={"https://www.levels.fyi/companies/" + props.companyName + "/salaries"} target="_blank">Link</a>
            </div>
        </div>
    </div>
  );
}

export default CompanyResult;
