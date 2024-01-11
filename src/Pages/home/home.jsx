import React from 'react';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widgets/Widget';
import Table from '../../components/table/Table';


const home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Lastest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default home