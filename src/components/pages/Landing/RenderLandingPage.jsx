import React from 'react';

// ADD IMPORTS BACK FOR GRAPHS SECTION
// import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';

// import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';

// import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';

import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* <div className="graphs-section"> */}
      <div className="graphs-section">
        <div className="graph-office-container">
          <img
           src={GrantRatesByOfficeImg}
           alt="Grant Rates By Office"
           className="grant-office-img"
          />
          <p className="graphs-title">Search Grant Rates By Office</p>
        </div>

        <div className="graph-nationality-container">
          <img
           src={GrantRatesByNationalityImg}
           alt="Grant Rates By Nationality"
           className="grant-nationality-img"
          />
          <p className="graphs-title">Search Grant Rates By Nationality</p>
        </div>

        <div className="graph-time-container">
          <img
           src={GrantRatesOverTimeImg}
           alt="Grant Rates Over Time"
           className="grant-time-img"
          />
          <p className="graphs-title">Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="graphs-btn">
        <div className="view-more-data-btn-container">
          <Button
           type="default"
           style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
           onClick={() => history.push('/graphs')}
           >
            View the Data
          </Button>
        </div>

        <div className="download-data-btn-container">
          <Button
           type="default"
           style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
           onClick={() => window.location.href = 'https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv'}
           >
            Download the Data
          </Button>
        </div>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>

        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <div className="bottom-section">
          <h1 className="bottom-title">Systemic Disparity Insights</h1>
          <div className="percentage-wrapper">

            <div className="percentage-container">
              <span className="percentage-text">36%</span>
              <div classname="percentage-description">
                By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </div>
            </div>

            <div className="percentage-container">
              <span className="percentage-text">5%</span>
              <div className="percentage-description">
                The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
              </div>
            </div>

            <div className="percentage-container">
              <span className="percentage-text">6x Lower</span>
              <div className="percentage-description">
                Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times lower than the San Francisco asylum office.
              </div>
            </div>
          </div>
        </div>

        <div className="read-more-btn">
          <div className="read-more-btn-container">
            <Button
             type="default"
             style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
             onClick={() => window.location.href = 'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/'}
            >
              Read More
            </Button>
          </div>
        </div>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;