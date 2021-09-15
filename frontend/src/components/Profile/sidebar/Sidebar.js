import "./sidebar.css";
import StarsIcon from '@material-ui/icons/Stars';
import PaymentIcon from '@material-ui/icons/Payment';
import UpdateIcon from '@material-ui/icons/Update';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <StarsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">View Ratings and Feedback</span>
          </li>
          <li className="sidebarListItem">
            <PaymentIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Verify Payment</span>
          </li>
          <li className="sidebarListItem">
            <UpdateIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Upgrade Membership</span>
          </li>
          <li className="sidebarListItem">
            <DescriptionIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Generate Reports</span>
          </li>
          <li className="sidebarListItem">
            <LiveHelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
