import '../styles/SliderZone.css';
import left_btnImg from '../img/left_btn.png';
import right_btnImg from '../img/right_btn.png';
import slider1 from '../img/1.jpg';
import slider2 from '../img/2.jpg';
import slider3 from '../img/3.jpg';

import { useState, useEffect } from 'react';

export function SliderZone() {
  /*
   useState 훅을 사용해서 currentIndex 상태 변수 선언하고 초기값 0 설정
   currentIndex는 현재 보여주고 있는 슬라이드의 인덱스 의미함
   setCurrentIndex는 해당 상태를 업데이트 하는 함수
  */
  const [currentIndex, setCurrentIndex] = useState(0);

  /*
    슬라이드에 보여줄 이미지를 배열에 저장함
    이 배열은 슬라이드 컴포넌트에서 순회하며 각 슬라이드를 렌더링할 때 사용됨
  */
  const sliders = [slider1, slider2, slider3];

  const handleArrowClick = (direction) => {
    // 현재 슬라이드 인덱스 + 방향 값
    let _index = currentIndex + direction;

    /*
      슬라이드 쇼의 시작과 끝을 벗어나지 않기 위해 설정
      인덱스가 -1 일 경우 시작 이미지를을 벗어나게 되므로 0으로 설정함
    */
    if (_index < 0) {
      _index = 0;
      // 현재 슬라이드 이미지가 마지막 슬라이드 이미지를 벗어날 경우
    } else if (_index > sliders.length - 1) {
      // 마지막 슬라이드로 설정
      _index = sliders.length - 1;
    }
    // 계산된 인덱스로 현재 슬라이드 위치 업데이트
    setCurrentIndex(_index);
  }

  // 슬라이드 자동 전환 타이머 설정
  useEffect(
    () => {
      // setInterval()을 이용해서 3초(3000)마다 슬라이드 인덱스 1씩 증가
      const interval = setInterval(
        () => {
          /* 
            (idx +1): idx는 현재 인덱스인데, 다음 슬라이드로 넘어가기 위해 +1을 함
                      만약 `idx % sliders.length`를 하면 `0 % sliders.length`는 항상 0이므로
                      슬라이드가 전환되지 않고 첫 번째 슬라이드에 머물게 됨
          */
          setCurrentIndex((idx) => (idx + 1) % sliders.length)
        }, 3000
      );
      // 컴포넌트가 언마운트 될 때 메모리 누수 방지를 위해 함수 반복 중단
      return () => clearInterval(interval);
      // sliders.length가 변경될 때마다 이 useEffect가 재실행 됨
    }, [sliders.length]
  )
  return (
    <>
      <div id="sliderZone">
        <div id="sub_photo_bg">
          <ul className="slider_panel"
            style={{ left: `-${currentIndex * 100}%` }}
          >
            {
              sliders.map(
                (slider, index) => (
                  <li key={index} className="slider_image"><img src={slider} alt="" /></li>
                )
              )
            }
            {/* <li className="slider_image"><img src={slider1} alt=""/></li>
                    <li className="slider_image"><img src={slider2} alt=""/></li>
                    <li className="slider_image"><img src={slider3} alt=""/></li> */}
          </ul >
          <div className="control_panel">
            {
              sliders.map((slider, index) => {
                return (
                  <div className={`control_btn ${currentIndex === index ? 'active' : ''}`} onClick={() => { setCurrentIndex(index); }}></div>
                );
              })
            }
            {/* <div className={`control_btn ${currentIndex === 0 ? 'active' : ''}`} onClick={()=>{setCurrentIndex(0);}}></div>
            <div className={`control_btn ${currentIndex === 1 ? 'active' : ''}`} onClick={()=>{setCurrentIndex(1);}}></div>
            <div className={`control_btn ${currentIndex === 2 ? 'active' : ''}`} onClick={()=>{setCurrentIndex(2);}}></div> */}
          </div>
          <div className="direct_btn">
            <div className="left_btn" onClick={() => handleArrowClick(-1)}><img src={left_btnImg} alt="" /></div>
            <div className="right_btn" onClick={() => handleArrowClick(+1)}><img src={right_btnImg} alt="" /></div>
          </div>
        </div >
      </div >
    </>
  )
}