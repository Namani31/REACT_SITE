import "../styles/BodyArea.css";
import { LeftmenuZone } from "./LeftmenuZone";
import { ContentsZone } from "./ContentsZone";

export function BodyArea(){
  return (
    <div id="bodyArea">
    <LeftmenuZone/>
    <ContentsZone/>
    </div>
  );

  /*
              
              <!-- 내용Zone시작 -->
              <style>

              </style>
              
              <!-- 내용Zone끝 -->
          </div>
          <!-- 본문Area끝 -->
  */
}