import React, {useState} from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import CompanyResult from "./CompanyResult";


const data = [
      {
        data: {
          compensation: 0.1,
          culture: 0.1,
          status: 0.1,
          hardproblems: 0.1,
          industry: 0.1
        },
        meta: { color: 'blue' }
      }
    ];

const captions = {
      // columns
      compensation: 'Compensation',
      culture: 'Culture',
      status: 'Status/Prestige',
      hardproblems: 'Hard technical problems',
      industry: 'Industry'
    };

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [updatedSearchInput, setUpdatedSearchInput] = useState("");
    const [showHideRadarChart, setShowHideRadarChart] = useState(true);
    const [showHideCompanyResult, setShowHideCompanyResult] = useState(false);


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setUpdatedSearchInput(e.target.value);
            setShowHideRadarChart(false);
            setShowHideCompanyResult(true);
        }
      };

    return (
    <div id="cover">
        <form method="get" action="">
            <div className="tb">
                <div className="td">
                    <input
                        type="search"
                        placeholder="Enter Company name"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        value={searchInput}
                    />
                </div>
                {showHideRadarChart && <RadarChart
                captions={captions}
                data={data}
                size={450}
                /> }
                {showHideCompanyResult && <CompanyResult companyName={searchInput}/>}
                {/*<div className="td" id="s-cover">*/}
                {/*    <button type="submit">*/}
                {/*        <div id="s-circle"></div>*/}
                {/*        <span></span>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </form>
    </div>
    );
}
export default SearchBar;