import '../styles/TitleZone.css';
import logoImg from '../img/logo.jpg';

export function TitleZone() {
  return (
    <>
      <div id="titleZone">
        <div id="gnb">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Join</a></li>
            <li><a href="#">Mypage</a></li>
          </ul>
        </div>
        <div id="logo">
          <img src={logoImg} alt="" />
        </div>
      </div>
    </>
  );
}