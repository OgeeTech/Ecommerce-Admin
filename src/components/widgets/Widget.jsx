import "./Widget.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";

const Widget = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">USERS</span>
                {/* <span className="counter">21312</span> */}
                <span className="link">see all user</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                <PersonOutlineOutlined className="icon" />
            </div>
        </div>
    )
}

export default Widget