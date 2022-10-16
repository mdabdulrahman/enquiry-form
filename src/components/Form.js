import React, { Component } from 'react'
import axios from "axios"
export default class Form extends Component {
    constructor(props) {
        super(props);
     this.state={name:"",companyname:"",phonenumber:"",message:"",status:{load:<h1>Submit</h1>}}
    
    }
    submit(e){
        e.preventDefault()
        this.setState({status:{load:<><div className='h-6 w-6 rounded-full border-4 border-t-4 border-t-sky-500 bg-sky-500 animate-spin'></div><h1 className='pl-3 '>Submitting...</h1></>}})
            console.log("submitting.....")
            console.log(this.state)
            axios.post("https://sheetdb.io/api/v1/8s7a8kw264v10",this.state
            ).then((res)=>{console.log(res);res.status===201?window.location.pathname="/success":window.location.pathname="/fail"})

    }
  render() {
    return (
      <div>
            <div>
        <div className='form-width  mx-auto my-11'>
        <form onSubmit={(e)=>this.submit(e)} className='grid py-3 gap-4 lg:w-1/2  lg:mx-auto '>
            <label htmlFor='name'>Name : </label>
            <input type="text"  name="name" id="name" className='rounded-sm' placeholder='ex : John' onChange={(e)=>this.setState({name:e.target.value})}  required></input>
            <label htmlFor='bname'>Buisness Name : </label>
            <input type="text" name="companyname" id="bname" className='rounded-sm' placeholder='ex : Goods export pvt' onChange={(e)=>this.setState({companyname:e.target.value})}  required></input>
            <label htmlFor='ph'>Phone Number : </label>
            <input type="tel" name="phonenumber" id="ph" pattern="[0-9]*" className='rounded-sm ' placeholder='ex : 9876543210' onChange={(e)=>this.setState({phonenumber:e.target.value})}  required ></input>
            <label htmlFor='mes'>Message : </label>
           <textarea  className='resize-none rounded-sm h-40' name="message" placeholder='Enter your Message' onChange={(e)=>this.setState({message:e.target.value})}   required></textarea>
           <button type="submit" className='bg-sky-500 flex justify-center text-white p-4 rounded'>{this.state.status.load}</button>
        </form>
        </div>
    </div>
      </div>
    )
  }
}
