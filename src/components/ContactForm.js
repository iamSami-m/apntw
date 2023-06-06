import React, { Component } from 'react';
import "./ContactFormStyle.css"

class ContactForm extends Component {
    state = {  } 
    render() { 
        return (
            <div className='form'>
                <form dir='rtl'>
                    <label>نام</label>
                    <input type='text'></input>
                    <label>ایمیل</label>
                    <input type='email'></input>
                    <label>موضوع</label>
                    <input type='text'></input>
                    <label>پیغام</label>
                    <textarea row="6" placeholder=''/>
                    <button className='btn'>ارسال</button>
                </form>
            </div>
        );
    }
}
 
export default ContactForm;