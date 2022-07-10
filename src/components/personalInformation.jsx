import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import '../styles/personalInfo.scss'
import buttonIcon from '../images/buttonIcon.png'


const PersonalInformation = () => {
    const navigate = useNavigate()
    const [massage, setMassage] = useState('')
    let userName = ''
    let userEmail = ''
    let userPhone = ''
    let userDate = ''

    const handleChange = event => {
        setMassage(event.target.value)
    }
    const handleClick = event => {
        event.preventDefault()
        let inputName = document.getElementById('name')
        if(massage.trim().length <= 2){
            inputName.classList.remove('inputSuccsess')
            inputName.classList.add('inputError')
        }else{
            inputName.classList.remove('inputError')
            inputName.classList.add('inputSuccsess')
            userName = inputName.value
        }
        let inputEmail = document.getElementById('email')
        if(!inputEmail.value.includes('@redberry.ge')){
            inputEmail.classList.remove('inputSuccsess')
            inputEmail.classList.add('inputError')
        }else{
            inputEmail.classList.remove('inputError')
            inputEmail.classList.add('inputSuccsess')
            userEmail = inputEmail.value
        }
        let inputPhone = document.getElementById('phone')
        if(inputPhone.value.length < 9){
            inputPhone.classList.remove('inputSuccsess')
            inputPhone.classList.add('inputError')
        }else{
            inputPhone.classList.remove('inputError')
            inputPhone.classList.add('inputSuccsess')
            userPhone = inputPhone.value
        }
        let inputDate = document.getElementById('date')
        if(inputDate.value.length === 0){
            inputDate.classList.remove('inputSuccsess')
            inputDate.classList.add('inputError')
        }else{
            inputDate.classList.remove('inputError')
            inputDate.classList.add('inputSuccsess')
            userDate = inputDate.value
        }
        saveInformation()
    }
    const saveInformation = () => {
        var arr = new Array();
        arr.push(userName, userEmail, userPhone, userDate)
        localStorage.setItem('userName', arr[0])
        localStorage.setItem('userEmail', arr[1])
        localStorage.setItem('userPhone', arr[2])
        localStorage.setItem('userDate', arr[3])
        checkRegister(userName,userEmail,userPhone,userDate)
    }
    const checkRegister = (name,email,phone,date) => {
        if(name.length > 0 && email.length > 0 && phone.length > 0 && date.length > 0){
            registered()
        }
    }
    const registered = () => {
        navigate('/registered')
    }
    return (
        <section className='personalInfo'>
            <div className="rightHeader">
                <span>Start Creating Your Account</span>
            </div>
            <div className="steps">
                <ul className="progressbar">
                <div className="line"></div>
                    <li><span>Personal information</span></li>
                    <li><span>Chess experience</span></li>
                </ul>
		    </div>
            <div className="textDiv">
                <span className='bigTxt'>Personal information</span>
                <div>
                    <span className='smallTxt'>This is Basic Informaton Fields</span>
                </div>
            </div>
            <form action="">
                <div className="formInputs">
                    <input 
                        id='name'
                        type="text"
                        name="message" 
                        onChange={handleChange} 
                        autoComplete="off" 
                        placeholder='Name*' required
                    />
                </div>
                <div className="formInputs">
                    <input 
                        id="email"
                        type="email" 
                        autoComplete="off"
                        placeholder='Email address*' required
                    />
                </div>
                <div className="formInputs">
                    <input 
                        id='phone'
                        autoComplete="off" 
                        type="number" 
                        placeholder='Phone number*' required
                    />
                </div>
                <div className="formInputs">
                    <input
                        id='date'
                        type="date" 
                        placeholder='Date of birth*' required
                    />
                </div>
            </form>
            <div className="buttons">
                <button className='backBtn' onClick={() => navigate(-1)}>Back</button>
                <button className='nextBtn' onClick={handleClick}>Next<img src={buttonIcon} alt="" /></button>
            </div>
        </section>
    )
}

export default PersonalInformation