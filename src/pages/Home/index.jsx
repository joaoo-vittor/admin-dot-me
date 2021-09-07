import './style.css';
import { FeatureInfo } from '../../components/FeatureInfo';
import { Chart } from '../../components/Chart';
import { userData } from '../../dummyData';
import { WidgetSm } from '../../components/WidgetSm';
import { WidgetLg } from '../../components/WidgetLg';

export const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart 
        data={userData}
        dataKeyLine="Active User"
        dataKeyXAxis="name" 
        title="Sales Analytics"/>
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

