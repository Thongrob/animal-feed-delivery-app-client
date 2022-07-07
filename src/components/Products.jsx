import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import axios from "axios";
import { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'


//ฟังก์ชันการดึงข้อมูลทั้งหมด
function Products() {
  const [stores, setStores] = useState([]);
  const [word, setWord] = useState("")
  const [dataFilter] = useState(["driverName","productName","bookingDate"])

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/orderes`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((err) => alert(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

//Fiter data
const select = (people) => {
  return stores.filter((item)=>{      
    return dataFilter.some((filter)=>{                    
      return item[filter].indexOf(word)  > -1       
    })
  })
}

  return (
    <>
        <Navbar/>
        <div className='container p-5'>
          <h1 className="my-4">รายการสั่งซื้อ</h1>
          {/* {JSON.stringify(stores)} */}
          <form onSubmit={select}>
            <div className="form-group pb-2">
              <label>กรองข้อมูลจาก ชื่อผู้นำส่ง, วันที่จัดส่ง, สินค้าที่จัดส่ง</label>
              <input type="text" placeholder="ตัวอย่าง ชื่อ(สมชาย),     วันที่จัดส่ง(6/11/2565),     สินค้าที่จัดส่ง(หญ้าอัลฟาฟ่า)" className="form-control" value={word} onChange={(e) => setWord(e.target.value)}/>
            </div>
            {/* <div className="form-group pb-2">
              <select className="form-select" aria-label="Default select example" >
                  <option defaultValue>กรองตามวันที่จัดส่ง</option>
                  <option value="15/08/2563">15/08/2563</option>
                  <option value="15/08/2563">16/08/2563</option>         
              </select>
            </div>
            <div className="form-group pb-2">
              <select className="form-select" aria-label="Default select example" >
                  <option defaultValue>กรองตามรายการสินค้า</option>
                  <option value="หญ้าธีโมธี">หญ้าธีโมธี</option>
                  <option value="หญ้าอัลฟาฟ่า">หญ้าอัลฟาฟ่า</option>
                  <option value="อาหารเม็ดกระต่าย">อาหารเม็ดกระต่าย</option>
                  <option value="นมแพะอัดเม็ด">นมแพะอัดเม็ด</option>            
              </select>
            </div> */}
          </form>
            {select(stores).map((product, index) => (
            <div className="row " key={index}>
              <div className="col-sm-12 pt-3 pb-2 mb-5 border rounded bg-white text-dark">
                <p>{`หมายเลขสั่งซื้อ: ${product.orderNumber}`}</p>
                <p>{`ชื่อผู้นำส่ง: ${product.driverName}`}</p>
                <p>{`รายการสินค้า: ${product.productName}`}</p>
                <p>{`น้ำหนัก: ${product.weight} Kg.`}</p>
                <p>{`จำนวน: ${product.quantity} Unit`}</p>
                <p>{`หมายเลขทะเบียนรถ:  ${product.car}`}</p>
                <p>{`เวลาจัดส่ง: ${product.bookingTime}`}</p>
                <p>{`วันที่จัดส่ง: ${product.bookingDate}`}</p>
                <p>{`ราคาสินค้า: ${product.productPrice}`}</p>
                <p>{`ราคาค่าส่ง: ${product.shippingPrice}`}</p>
                <p>{`ราคารวม: ${product.totalPrice}`}</p>
                <p>{`ชื่อผู้สั่งซื้อ:  ${product.buyer}`}</p>
                <p>{`เบอร์โทรผู้สั่งซื้อ: ${product.contact}`}</p>
                <p>{`ผู้บันทึก: ${product.author}`}</p>             
                <p className='text-muted'>Date :{new Date(product.createdAt).toLocaleString()}</p>
              </div>
            </div>
          ))}

        </div>
        <Footer/>
    </>
  )
}

export default Products