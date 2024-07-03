import {
    SmileOutlined} from '@ant-design/icons';
  
function Footer() {
   return (
    <div style={{
        height: '80px',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        fontsize: '1rem',
        backgroundColor: 'pink',
        color: '#fff'
    }}>
      <p> AVERY <SmileOutlined /> </p>
    </div>
   );
}

export default Footer;