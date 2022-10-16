import React,{useState} from 'react'

import axios from "axios"
import ReactTable from "react-table"; 
import { useNavigate } from 'react-router-dom';
function View() {
    const [data, setdata] = useState(null)
const navigate=useNavigate()
 axios.get("https://api.sheety.co/3a9385b743c49c94f44bebe1d4413644/enquiry/sheet1").then((res)=>{console.log(res.data); let a=data==null?setdata(res.data):null})
   


let table=()=><>
<table className='w-5/6 my-11 mx-auto text-sm text-left text-gray-500 dark:text-gray-400'>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th  scope="col" className="py-3 px-6">Name </th>
            <th  scope="col" className="py-3 px-6">Buisness Name</th>
            <th  scope="col" className="py-3 px-6">Phone Number</th>
            <th  scope="col" className="py-3 px-6">Message</th>
        </tr>
    </thead>
    <tbody>
        {data.sheet1.map(
            (e)=>{
                return (
                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{e.name}</td>
                    <td className="py-4 px-6">{e.companyname}</td>
                    <td className="py-4 px-6">{e.phonenumber}</td>
                    <td className="py-4 px-6  ">{e.message}</td>
                </tr>)
            }
        )}
    </tbody>
</table>
</>

  return (
    <div>

        <button onClick={()=>navigate("/")} className='bg-sky-500 mx-auto flex justify-center text-white px-3 py-2 my-6 rounded'>Go back</button>
      {data!=null?table():"loading..."}
      <a className='bg-sky-500 lg:w-1/4 w-3/6 mx-auto flex justify-center text-white px-3 py-2 my-6 rounded' href='https://docs.google.com/spreadsheets/d/1Pwd2Zdd_KtbBkSLRn-i8t_ri5-KcZnghjNysjdktTI4/edit#gid=0'>Go to Google Sheet </a>
    </div>
  )
}

export default View