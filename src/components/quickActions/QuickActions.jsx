import "./QuickActions.css";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      title: "Add User",
      description: "Create a new user account",
      icon: <PersonAddIcon />,
      link: "/users/new",
      color: "#3b82f6"
    },
    {
      title: "Add Product",
      description: "Add new product to inventory",
      icon: <InventoryIcon />,
      link: "/products/new",
      color: "#10b981"
    },
    {
      title: "View Reports",
      description: "Generate analytics reports",
      icon: <AssessmentIcon />,
      link: "#",
      color: "#f59e0b"
    },
    {
      title: "Settings",
      description: "Configure system settings",
      icon: <SettingsIcon />,
      link: "#",
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="quickActions">
      <div className="quickActionsHeader">
        <h3>Quick Actions</h3>
        <p>Frequently used actions</p>
      </div>
      <div className="actionsGrid">
        {actions.map((action, index) => (
          <Link 
            key={index} 
            to={action.link} 
            className="actionCard"
            style={{ textDecoration: 'none' }}
          >
            <div className="actionIcon" style={{ backgroundColor: `${action.color}20`, color: action.color }}>
              {action.icon}
            </div>
            <div className="actionContent">
              <h4>{action.title}</h4>
              <p>{action.description}</p>
            </div>
            <div className="actionArrow">
              <AddIcon style={{ transform: 'rotate(45deg)' }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;