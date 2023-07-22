import "./topbar.css"
import {NotificationsNone,Settings,Language} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topleft">
              <span className="logo">koukiadmin</span>
            </div>
            <div className="topRight">
              <div className="topbarIconscontainer">
              <NotificationsNone/>
              <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconscontainer">
              <Settings/>
              </div>
              <div className="topbarIconscontainer">
              <Language/>
              <span className="topIconBadge">2</span>
              </div>
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar"/>
            </div>
        </div>
      
    </div>
  )
}
