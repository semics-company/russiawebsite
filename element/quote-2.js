import React, { useState } from 'react'
import { BASEURL } from '../pages/api/BASEURL'
import axios from 'axios'
function Quote2() {
	const [firstName,setFirstName]=useState('')
	const [lastName,setLastName]=useState('')
	const [email,setEmail]=useState('')
	const [phone,setPhone]=useState('')
	const [title,setTitle]=useState('')
	const [message,setMessage]=useState('')
	const [errorMessage,setErrorMessage]=useState('')
	const [successMessage,setSuccessMessage]=useState('')
	const [service,setService]=useState('more')
	const insertdata=(e)=>{
		e.preventDefault();
		const data={
			"first_name": firstName,
			"last_name": lastName,
			"email": email,
			"subject": title,
			"message": message,
			"phone": phone,
			"service":service
		}
		axios.post(`${BASEURL}/calls/contact/`,data)
			.then(t=>{
				setErrorMessage('')
				setSuccessMessage('با موفقیت ارسال شد.')
			}).catch(c=>{
				setErrorMessage('شماره تلفن اشتباه وارد شده است/')
				setSuccessMessage('')

			})

	}
	return (
		<>
			<div className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 quote-media">
						<div className="dlab-media style-1 move-1">	
							<img src="images/team/large/pic1.jpg" alt=""/>
						</div>
						<div className="dlab-media style-2 move-2">	
							<img src="images/team/large/pic2.jpg" alt=""/>
						</div>
						<div className="dlab-media style-3 move-3">	
							<img src="images/team/large/pic3.jpg" alt=""/>
						</div>
					</div>
					

					<div className="col-lg-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<p style={{color:"red"}} className={errorMessage == ""?'text-right d-none':'text-right'}>{errorMessage}</p>
						<p style={{color:"green"}} className={successMessage == ""?'text-right d-none':'text-right'}>{successMessage}</p>

						<form className="dlab-form dzForm" onSubmit={e=> insertdata(e)}>
							<div className="dzFormMsg"></div>
							<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
							<div className="row">
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" value={firstName} onChange={e=> setFirstName(e.target.value)} required type="text" className="form-control" placeholder="نام" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="last_name" value={lastName} onChange={e=> setLastName(e.target.value)} required type="text" className="form-control" placeholder="نام خانوادگی" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzEmail" value={email} onChange={e=> setEmail(e.target.value)} required type="text" className="form-control" placeholder="ادرس ایمیل" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[phone]" value={phone} onChange={e=> setPhone(e.target.value)} required type="text" className="form-control" placeholder="شماره تلفن" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[project_title]" value={title} onChange={e=> setTitle(e.target.value)} required type="text" className="form-control" placeholder="عنوان پیام" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<select onChange={e=> setService(e.target.value)} name="dzOther[priority]" className="form-control" required>
											<option selected>نوع سرویس</option>
											<option value="student">دانشجویی</option>
											<option value="visa">ویزا</option>
											<option value="more">غیره</option>
										</select>
									</div>
								</div>
								
								<div className="col-sm-12">
									<div className="input-group">
										<textarea name="dzMessage" value={message} onChange={e=> setMessage(e.target.value)} required className="form-control" placeholder="متن پیام..."></textarea>
									</div>
								</div>
								
								
								
								
								<div className="col-sm-12 mt-2">
									<button name="submit" type="submit" value="Submit" className="btn btn-primary gradient border-0 rounded-xl">ارسال</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Quote2;