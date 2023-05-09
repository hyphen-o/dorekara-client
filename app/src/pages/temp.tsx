import React from 'react'
import { userApi } from "@/api/routes/UserApi"
import { useState } from "react"

const Tmp = () => {
  const [a, setA] = useState<File | null>(null)
  const [imgUrl, setImgUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const body = {
        upload_image: e.currentTarget.files[0]
      }
      try {
        setLoading(true)
        const res = await userApi.uploadImage(1, body)
        setImgUrl(res.data)
      } catch (e) {
        setLoading(false)
      }
      setLoading(false)
    }
  }
  
  const onClick = async () => {
    console.log('db !!');
  }

  return (
    <>
      {loading ? 'loading...' : (
        <img src={imgUrl} alt="" />
      )}
      <input onChange={onChangeHandler} type='file' accept='image/*'  />
      <button onClick={onClick}>OKURU</button>
    </>
  )
}

export default Tmp