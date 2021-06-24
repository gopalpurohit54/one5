import React from 'react';
import './Devprocess.css';

function Devprocess() {
    return (
        <div className="devprocess">
            <div className="dev-desc">
                <div className="dev-left">
                    <h1>DEVELOPMENT PROCESS <br/>
                    THAT DELIVERS RESULT</h1>
                </div>
                <div className="dev-right">
                    <ul className="dev-list">
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >01.</span> IDEA</h4>
                            <p className="item-1">It all starts with a great idea. You tell us which business goals your new software should enable.</p>
                        </li>
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >02.</span> BUSINESS ANALYTICS</h4>
                            <p className="item-2">Our team perform a competitive analysis, and begin to map out the strategy.</p>
                        </li>
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >03.</span> DESIGN & PROTOTYPING</h4>
                            <p className="item-3">We create the actual conceptualizing of the solution, that is the detailed software architecture meeting specific project requirements is created.</p>
                        </li>
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >04.</span> DEVELOPMENT</h4>
                            <p className="item-4">The development phase is about writing code and converting design into the actual software.</p>
                        </li>
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >05.</span> TESTING</h4>
                            <p className="item-4">Comprehensive testing of the final product takes place to evaluate the robustness of the design and its ability to meet customer and performance requirements.</p>
                        </li>
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >06.</span> DEPLOYMENT</h4>
                            <p className="item-4">We work with your team to launch the system for your organization.</p>
                        </li>
                        <li className="dev-items">
                            <h4><span style={{color: '#F04E31'}} >07.</span> MAINTENANCE </h4>
                            <p className="item-4">We host, maintain and manage your system to keep it operating efficiently so you can see long-term cost savings and maximize the value of the system over a longer period of time.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Devprocess
