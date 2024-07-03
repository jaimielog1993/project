import React from 'react';
import { Layout, Menu, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../Assets/Averylogo.jpg';
import heart from '../Assets/heart.jpg';
import cart from '../Assets/cart.jpg';
import bell from '../Assets/bell.jpg';
import ClothesImage from '../Assets/ClothesImage.jpg';
import SpecialCoupon from '../Assets/SpecialCoupon.jpg';
import Discount from '../Assets/Discount.jpg';
import Clearance from '../Assets/Clearance.jpg';
import Passion from '../Assets/Passion.jpg';
import Weekly_1 from '../Assets/Weekly_1.jpg';
import Weekly_2 from '../Assets/Weekly_2.jpg';
import Weekly_3 from '../Assets/Weekly_3.jpg';
import Weekly_4 from '../Assets/Weekly_4.jpg';
import Weekly_5 from '../Assets/Weekly_5.jpg';
import Weekly_6 from '../Assets/Weekly_6.jpg';


const { Header, Content } = Layout;
const { Search } = Input;

const items = [
  { key : 'Daily', label : <a href='/'> Daily </a>, link: '/'},
  { key : 'Categories', label : <a href='/'> Categories </a>, link: '/'},
  { key : 'Promotion', label : <a href='/'> Promotion </a>, link: '/'},
  { key : 'QuickDelivery', label : <a href='/'> QuickDelivery </a>, link: '/'},
  ];
  
const NavBar = () => {
  const handleLoginClick = () => {
    console.log('로그인 클릭됨')
  }

  return (
    <Layout>
      <Header
        style={{
          background: 'white',
          color:'pink',
          fontSize : '30px',
          wordSpacing : '200px'
        }}
      >
        <img src={logo} alt="Avery로고" style={{width: '100px', height: 'auto', position : 'relative', left : '150px', top : '20px'}} />
        <Menu
          theme="light"
          mode="horizontal">
            {items.map(item => (
            <Menu.Item key={item.key} style={{ position : 'relative', bottom : '180px', left : '750px', wordSpacing : '100px'}}> 
              <a href={item.link} style={{color: 'black', fontSize: '30px', marginRight : '100px'}} > {item.label}</a>
            </Menu.Item>
            ))}
          </Menu>
        <Search
          placeholder="Search"
          onSearch={value => console.log(value)}
          style={{width : '380px', textAlign : 'center', position : 'relative', bottom : '100px', left : '1000px'}}
        />
          <img src={heart} alt="하트 아이콘" style={{position : 'relative', bottom : '150px', left : '1400px'}} />
          <img src={cart} alt="장바구니" style={{position : 'relative', bottom : '142px', left : '1420px'}} />
          <img src={bell} alt="종" style={{position : 'relative', bottom : '142px', left : '1440px'}} />
          <Button type="primary" on Click={handleLoginClick} style={{position : 'relative', bottom : '155px', left : '1470px'}} >로그인</Button>
      </Header>
      <Content style={{ padding : '50px', textAlign : 'center'}}>
        <div style={{ marginRight : '3px'}}>
        {/* 클릭 가능한 이미지 */}
        <a href='/'>
          <img src = { ClothesImage } alt="옷 사진" style={{ position : 'relative' , right : '213px', top : '50px' }} />  
        </a>
        <a href='/'>
          <img src = { SpecialCoupon } alt="스페셜 쿠폰" style={{ position : 'relative' , left : '-40px', top : '50px' }} />  
        </a>
        <a href='/'>
          <img src = { Discount } alt="할인" style={{ position : 'relative' , left : '100px', top : '50px' }} />  
        </a>
        <a href='/'>
          <img src = { Clearance } alt="세일즈" style={{ position : 'relative' , left : '210px', top : '50px' }} />  
        </a>
        <a href='/'>
          <img src = { Passion } alt="당신의 AI 디자이너" style={{ position : 'relative' , left : '600px', top : '100px', height : '230px'}} />  
        </a>
        <a href='/'>
          <img src = { Weekly_1 } alt="Weekly-first" style={{ position : 'relative' , right : '1000px', top : '400px'}} />  
        </a>
        <a href='/'>
          <img src = { Weekly_2 } alt="Weekly-second" style={{ position : 'relative' , right : '900px', top : '400px'}} />  
        </a>
        <a href='/'>
          <img src = { Weekly_3 } alt="Weekly-third" style={{ position : 'relative' , right : '700px', top : '400px'}} />  
        </a>
        <a href='/'>
          <img src = { Weekly_4 } alt="Weekly-forth" style={{ position : 'relative' , right : '500px', top : '400px'}} />  
        </a>
        <a href='/'>
          <img src = { Weekly_5 } alt="Weekly-fifth" style={{ position : 'relative' , right : '300px', top : '400px'}} />  
        </a>
        <a href='/'>
          <img src = { Weekly_6 } alt="Weekly-sixth" style={{ position : 'relative' , right : '100px', top : '400px'}} />  
        </a>
        </div>
      </Content>
      </Layout>
  );
};
export default NavBar