import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"




function Insert() {
    const [state, setState] = useState({
        driverName :"",
        timothyItem :"",
        alphaphaItem :"",
        rabbitItem :"",
        goatItem :"",
        timothyWeight: "",
        alphaphaWeight: "",
        rabbitWeight: "",
        goatWeight: "",
        timothyQuantity:"",
        alphaphaQuantity:"",
        rabbitQuantity:"",
        goatQuantity:"",
        bookingTime:"",
        bookingDate:"",
        buyer:"",
        contact:"",
        author:"",
    })
    const {driverName, timothyItem, alphaphaItem, rabbitItem, goatItem, timothyWeight, alphaphaWeight, rabbitWeight, goatWeight, timothyQuantity, alphaphaQuantity, rabbitQuantity, goatQuantity, bookingTime, bookingDate, buyer, contact, author} = state

    const inputValue = name => event => {
        // console.log(name, "=", event.target.value)
        setState({...state, [name]:event.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        ////debug
        // console.table({driverName, productName, weight, quantity, bookingTime, bookingDate, buyer, contact, author});
        // console.log("API URL =",process.env.REACT_APP_API)
        axios.post(`${process.env.REACT_APP_API}/insert`,{driverName, timothyItem, alphaphaItem, rabbitItem, goatItem, timothyWeight, alphaphaWeight, rabbitWeight, goatWeight, timothyQuantity, alphaphaQuantity, rabbitQuantity, goatQuantity, bookingTime, bookingDate, buyer, contact, author})
        .then(response => {
            Swal.fire('แจ้งเตือน','บันทึกข้อมูลเรียบร้อย','success')
            setState({...state, driverName:"", timothyItem:"", alphaphaItem:"", rabbitItem:"", goatItem:"", timothyWeight:"", alphaphaWeight:"", rabbitWeight:"", goatWeight:"", timothyQuantity:"", alphaphaQuantity:"", rabbitQuantity:"", goatQuantity:"", bookingTime:"", bookingDate:"", buyer:"", contact:"", author:""})
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
                        <div className="form-group pb-4">
                            <label>เลือกคนขับจัดส่ง</label>
                            <select className="form-select" aria-label="Default select example" value={driverName} onChange={inputValue("driverName")}>
                                <option defaultValue>กรุณากดเลือกคนขับจัดส่ง</option>
                                <option value="ฝรั่ง">ฝรั่ง</option>
                                <option value="มะละกอ">มะละกอ</option>
                                <option value="ส้ม">ส้ม</option>
                            </select>
                        </div>
                        <div className="form-group pb-2">
                            <label>หญ้าธีโมธี</label>
                            <select className="form-select" aria-label="Default select example" value={timothyItem} onChange={inputValue("timothyItem")}>
                                <option defaultValue>กรุณากดเลือกสินค้าที่ต้องการ</option>
                                <option value="หญ้าธีโมธี">หญ้าธีโมธี</option>
                            </select>
                        </div>
                        <div className="form-group pb-2">
                            <label>น้ำหนัก</label>
                            <input type="number" placeholder="กิโลกรัม" className="form-control" value={timothyWeight} onChange={inputValue("timothyWeight")}/>
                        </div>
                        <div className="form-group pb-4">
                            <label>จำนวน</label>
                            <input type="number" placeholder="ถุง" className="form-control" value={timothyQuantity} onChange={inputValue("timothyQuantity")}/>
                        </div>
                        <div className="form-group pb-2">

                            <label>หญ้าอัลฟาฟ่า</label>
                            <select className="form-select" aria-label="Default select example" value={alphaphaItem} onChange={inputValue("alphaphaItem")}>
                                <option defaultValue>กรุณากดเลือกสินค้าที่ต้องการ</option>
                                <option value="หญ้าอัลฟาฟ่า">หญ้าอัลฟาฟ่า</option>
                            </select>
                        </div>
                        <div className="form-group pb-2">
                            <label>น้ำหนัก</label>
                            <input type="number" placeholder="กิโลกรัม" className="form-control" value={alphaphaWeight} onChange={inputValue("alphaphaWeight")}/>
                        </div>
                        <div className="form-group pb-2">
                            <label>จำนวน</label>
                            <input type="number" placeholder="ถุง" className="form-control" value={alphaphaQuantity} onChange={inputValue("alphaphaQuantity")}/>
                        </div>

                        <div className="form-group pb-2">
                            <label>อาหารเม็ดกระต่าย</label>
                            <select className="form-select" aria-label="Default select example" value={rabbitItem} onChange={inputValue("rabbitItem")}>
                                <option defaultValue>กรุณากดเลือกสินค้าที่ต้องการ</option>
                                <option value="อาหารเม็ดกระต่าย">อาหารเม็ดกระต่าย</option>
                            </select>
                        </div>
                        <div className="form-group pb-4">
                            <label>น้ำหนัก</label>
                            <input type="number" placeholder="กิโลกรัม" className="form-control" value={rabbitWeight} onChange={inputValue("rabbitWeight")}/>
                        </div>
                        <div className="form-group pb-4">
                            <label>จำนวน</label>
                            <input type="number" placeholder="ถุง" className="form-control" value={rabbitQuantity} onChange={inputValue("rabbitQuantity")}/>
                        </div>

                        <div className="form-group pb-2">
                            <label>นมแพะอัดเม็ด</label>
                            <select className="form-select" aria-label="Default select example" value={goatItem} onChange={inputValue("goatItem")}>
                                <option defaultValue>กรุณากดเลือกสินค้าที่ต้องการ</option>
                                <option value="นมแพะอัดเม็ด">นมแพะอัดเม็ด</option>
                            </select>
                        </div>
                        <div className="form-group pb-2">
                            <label>น้ำหนัก</label>
                            <input type="number" placeholder="กิโลกรัม" className="form-control" value={goatWeight} onChange={inputValue("goatWeight")}/>
                        </div>
                        <div className="form-group pb-4">
                            <label>จำนวน</label>
                            <input type="number" placeholder="ถุง" className="form-control" value={goatQuantity} onChange={inputValue("goatQuantity")}/>
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
