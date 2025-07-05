import "./Analytics.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";

const Analytics = () => {
  const analyticsData = [
    {
      title: "Active Users",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: <PeopleIcon />,
      color: "#3b82f6"
    },
    {
      title: "Total Orders",
      value: "1,423",
      change: "+8.2%",
      trend: "up",
      icon: <ShoppingCartIcon />,
      color: "#10b981"
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "-2.1%",
      trend: "down",
      icon: <AttachMoneyIcon />,
      color: "#f59e0b"
    },
    {
      title: "Products",
      value: "892",
      change: "+5.7%",
      trend: "up",
      icon: <InventoryIcon />,
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="analytics">
      <div className="analyticsHeader">
        <h2>Analytics Overview</h2>
        <span className="period">Last 30 days</span>
      </div>
      <div className="analyticsGrid">
        {analyticsData.map((item, index) => (
          <div key={index} className="analyticsCard">
            <div className="cardHeader">
              <div className="cardIcon" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                {item.icon}
              </div>
              <div className={`cardTrend ${item.trend}`}>
                {item.trend === "up" ? <TrendingUpIcon /> : <TrendingDownIcon />}
                {item.change}
              </div>
            </div>
            <div className="cardContent">
              <h3 className="cardValue">{item.value}</h3>
              <p className="cardTitle">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;