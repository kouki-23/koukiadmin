import "./home.css";
import Featuredinfo from "../../components/feauturedinfo/Feauturedinfo"
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetsmall/WidgetSm";
import WidgetLg from "../../components/widgetlarge/WidgetLg";

export default function Home() {
  
  return (
    <div className="home">
      <Featuredinfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

