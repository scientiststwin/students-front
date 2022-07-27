import axios from 'axios';

export const getstudents = async (nationality, sort) => {
  try{
    const response = await axios.get("/users", {
      params: {
        sort: sort,
        nationalityName: nationality
      }
    } )
    return response
  }
  catch(error){
    return Promise.reject(error)
  }
}

export const createStudent = async (student) => {
  try{
    const response = await axios.post('/users', student)
    return response
  }
  catch(error){
    return Promise.reject(error)
  }
}

export const getNationalities = async () => {
  try{
    const response = await axios.get('/nationalities')
    return response
  }
  catch(error){
    return Promise.reject(error)
  }
}