import {TitleZone}  from './TitleZone';
import {MenuZone}   from './MenuZone';
import {SliderZone} from './SliderZone';

export function TopArea(){
  return (
    // 상단Area시작
    <div id="topArea">
      <TitleZone/>
      <MenuZone/>
      <SliderZone/>
    </div>
    // 상단Area끝
  );
}