import { Menu } from 'antd';
import "./style.css"
import { SettingOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import LOGONEW from "../../img/logooooooooooooo.jpg";
function Menuu() {
  const items = [
    {
      label:"HCM ** 25°C"
    },
    {
      label: <Link to="/">Home</Link>,
      children: [
        {
          label: "Main Home"
        },
        {
          label: "Hostel Home",
        },
        {
          label: "Summer Reort",
        },
        {
          label: "Vocation Resort",
        },
        {
          label: "Hotel Home",
          key: "Hotel Home"
        },
        {
          label: "Landing",
        }
      ]
    },
    {
      label: <Link to="/cart">Room</Link>,
      key: 'Room',
      children: [
        {
          label: "Room List Tyles"
        },
        {
          label: "Room List Layouts",
        },
        {
          label: "Single Room"
        },
        {
          label: "My Account",
        },
        {
          label: "Cart"
        },
        {
          label: "Check out",
        }

      ]
    },
    {
      label: "Pages",
      key: 'Pages',
      children: [
        {
          label: <Link to="/cart">About us</Link>
        },
        {
          label: "Promottion & Offers"
        },
        {
          label: "Local activities",
        },
        {
          label: "Menu page"
        },
        {
          label: "FAQ page",
        },
        {
          label: "404 Error page"
        }
      ]
    },
    {
      label:  <Link to="/"><div className="logo"><img src={LOGONEW} alt='oke' ></img> </div></Link>,
      key: 'Logo'
      
    },
    {
      label: "Blog",
      key: 'Blog',
      children: [
        {
          label: <Link to="/cart">Right siderbar</Link>
        },
        {
          label: "Left siderbar"
        },
        {
          label: "Blog Pinterest",
        },
        {
          label: "Blog Single",
          children: [
            {
              label: <Link to="/cart">No sidebar</Link>
            },
            {
              label: <Link to="/cart">Standard</Link>
            },
            {
              label: "Gallery"
            },
            {
              label: "Quote",
            },
            {
              label: "Link"
            },
            {
              label: "Audio",
            },
            {
              label: "Video"
            }
          ]
        }
      ]
    },
    {
      label: "Contact",
      key: 'Contact'
      
    },
    {
      label: <Link to="/cart">StayConnect@gmail.com</Link>,
      key: 'email',}
  ]
  return (
    <>
      <Menu className='menuu' mode="horizontal"  items={items} />;
    </>
  );
}

export default Menuu;