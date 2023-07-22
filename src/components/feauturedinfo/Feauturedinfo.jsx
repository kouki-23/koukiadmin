import "./featuredinfo.css"
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"
export default function Feautedinfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span> 
        </div>  
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,5</span>
                <span className="featuredMoneyRate">
                    -12.2<ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span> 
        </div>    
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,6</span>
                <span className="featuredMoneyRate">
                    +2,14<ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span> 
        </div>       
    </div>
  )
}
