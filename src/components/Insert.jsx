import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';



function Insert() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h2>บันทึกข้อมูลการสั่งซื้อ</h2>
        <form>
            <div className="form-group">
                <label>เลือกคนขับ</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>กรุณากดเลือกคนขับ</option>
                    <option value="1">ฝรั่ง</option>
                    <option value="2">มะละกอ</option>
                    <option value="3">ส้ม</option>
                </select>
            </div>
            <div className="form-group">
                <label>เลือกสินค้า</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>กรุณากดเลือกสินค้า</option>
                    <option value="1">หญ้าธีโมธี</option>
                    <option value="2">หญ้าอัลฟาฟ่า</option>
                    <option value="3">อาหารเม็ดกระต่าย</option>
                    <option value="3">นมแพะอัดเม็ด</option>
                </select>
            </div>
            <div className="form-group">
                <label>น้ำหนัก</label>
                <input type="number" className="form-control"/>
            </div>
            <div className="form-group">
                <label>จำนวน</label>
                <input type="number" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="d-block">เวลา</label>
                <TimePicker onChange={onChange} value={value} />
            </div>
            <div className="form-group">
                <label>วันที่</label>
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            </div>
            <div className="form-group">
                <label>ชื่อผู้สั่งซื้อ</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label>เบอร์โทรผู้สั่งซื้อ</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="from-group py-3">
                <button type="submit"className="btn btn-primary form-control">บันทึก</button>
            </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Insert;
