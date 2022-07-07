import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"




function Insert() {
    const [state, setState] = useState({
        driverName :"",
        productName :"",
        weight : "",
        quantity:"",
        bookingTime:"",
        bookingDate:"",
        buyer:"",
        contact:"",
        author:"",
    })
    const {driverName, productName, weight, quantity, bookingTime, bookingDate, buyer, contact, author} = state

    const inputValue = name => event => {
        // console.log(name, "=", event.target.value)
        setState({...state, [name]:event.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        ////debug
        // console.table({driverName, productName, weight, quantity, bookingTime, bookingDate, buyer, contact, author});
        // console.log("API URL =",process.env.REACT_APP_API)
        axios.post(`${process.env.REACT_APP_API}/insert`,{driverName, productName, weight, quantity, bookingTime, bookingDate, buyer, contact, author})
        .then(response => {
            Swal.fire('แจ้งเตือน','บันทึกข้อมูลเรียบร้อย','success')
            setState({...state, driverName:"", productName:"", weight:"", quantity:"", bookingTime:"", bookingDate:"", buyer:"", contact:"", author:""})
        })
        .catch( err => {
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
    }
  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-sm">
                <div className="content">
                    <div className="content-title text-center">
                        <h2>บันทึกข้อมูลการสั่งซื้อ</h2>
                    </div>
                    {/* {JSON.stringify(state)} */}
                    <form onSubmit={submitForm}>
                        <div className="form-group pb-2">
                            <label>เลือกคนขับ</label>
                            <select className="form-select" aria-label="Default select example" value={driverName} onChange={inputValue("driverName")}>
                                <option defaultValue>กรุณากดเลือกคนขับ</option>
                                <option value="ฝรั่ง">ฝรั่ง</option>
                                <option value="มะละกอ">มะละกอ</option>
                                <option value="ส้ม">ส้ม</option>
                            </select>
                        </div>
                        <div className="form-group pb-2">
                            <label>เลือกสินค้า</label>
                            <select className="form-select" aria-label="Default select example" value={productName} onChange={inputValue("productName")}>
                                <option defaultValue>กรุณากดเลือกสินค้า</option>
                                <option value="หญ้าธีโมธี">หญ้าธีโมธี</option>
                                <option value="หญ้าอัลฟาฟ่า">หญ้าอัลฟาฟ่า</option>
                                <option value="อาหารเม็ดกระต่าย">อาหารเม็ดกระต่าย</option>
                                <option value="นมแพะอัดเม็ด">นมแพะอัดเม็ด</option>
                            </select>
                        </div>
                        <div className="form-group pb-2">
                            <label>น้ำหนัก</label>
                            <input type="number" placeholder="กิโลกรัม" className="form-control" value={weight} onChange={inputValue("weight")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>จำนวน</label>
                            <input type="number" placeholder="ถุง" className="form-control" value={quantity} onChange={inputValue("quantity")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>เวลา</label>
                            <input type="text" placeholder="เวลา ตัวอย่าง 10.00" className="form-control" value={bookingTime} onChange={inputValue("bookingTime")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>วันที่</label>
                            <input type="text" placeholder="วัน/เดือน/ปี ตัวอย่าง 12/05/2022" className="form-control" value={bookingDate} onChange={inputValue("bookingDate")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>ชื่อผู้สั่งซื้อ</label>
                            <input type="text" placeholder="ป้อนชื่อผู้สั่งซื้อ" className="form-control" value={buyer} onChange={inputValue("buyer")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>เบอร์โทรผู้สั่งซื้อ</label>
                            <input type="text" placeholder="ป้อนเบอร์โทรผู้สั่งซื้อ" className="form-control" value={contact} onChange={inputValue("contact")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>ผู้บันทึก</label>
                            <input type="text" placeholder="ป้อนชื่อผู้บันทึก" className="form-control" value={author} onChange={inputValue("author")}/>
                        </div>
                        <div className="from-group py-3">
                            <input type="submit"className="btn btn-primary form-control" value="บันทึก"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Insert;
