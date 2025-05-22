import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General Physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [education, setEducation] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    

    try {
      if (!docImg) {
        return toast.error('Image not selected')
      }
      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      // console formdata
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`)

      })
      console.log("Submitting doctor data:", formData);
      const { data } = await axios.post(backendUrl + 'api/admin/add-doctor', formData, { headers : { aToken } })

      if (data.success) {
        toast.success(data.message)
        
      }else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error("An error occurred while adding the doctor.");

    } 

  }


  const inputClass =
    'w-full p-3 border border-purple-700 rounded-md text-gray-700 focus:outline-none ';

  return (
    <form onSubmit={onSubmitHandler} className="p-8 w-full mx-auto rounded-lg shadow-lg">
      <p className="text-2xl font-semibold text-center text-purple-700 mb-6">Add Doctor</p>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Upload Section */}
        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload"
              className="w-32 h-32 object-contain rounded-full border-2 border-purple-700"
            />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p className="text-sm text-gray-600 text-center">Upload Doctor <br /> Picture</p>
        </div>

        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <p className="mb-1 text-gray-700 font-medium">Doctor Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className={inputClass} />
          </div>
          <div>
            <p className="mb-1 text-gray-700 font-medium">Doctor Email</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className={inputClass} />
          </div>
          <div>
            <p className="mb-1 text-gray-700 font-medium">Doctor Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className={inputClass} />
          </div>
          <div>
            <p className="mb-1 text-gray-700 font-medium">Experience</p>
            <select onChange={(e) => setExperience(e.target.value)} value={experience} required className={inputClass}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`${i + 1} Years`}>{i + 1} Year{i > 0 && 's'}</option>
              ))}
            </select>
          </div>
          <div>
            <p className="mb-1 text-gray-700 font-medium">Fees</p>
            <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" required className={inputClass} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <p className="mb-1 text-gray-700 font-medium">Speciality</p>
            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} required className={inputClass}>
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div>
            <p className="mb-1 text-gray-700 font-medium">Education</p>
            <input onChange={(e) => setEducation(e.target.value)} value={education} type="text" placeholder="Education" required className={inputClass} />
          </div>
          <div>
            <p className="mb-1 text-gray-700 font-medium">Address</p>
            <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address Line 1" required className={inputClass + ' mb-2'} />
            <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address Line 2" required className={inputClass} />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mt-6">
        <p className="mb-1 text-gray-700 font-medium">About Doctor</p>
        <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="About the Doctor" rows={5} required className={inputClass}></textarea>
      </div>

      {/* Submit */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-200"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
