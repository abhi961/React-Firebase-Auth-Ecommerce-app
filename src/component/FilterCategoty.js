import {  MenuItem, Select } from '@mui/material'
import React,{useState} from 'react'

 const FilterCategory = () => {
 const [val, setval] = useState("");

 const valHandler = (e) => {
  setval(e.target.value)
 }

  return (
   <Select value={val} displayEmpty
   onChange={valHandler}
   sx={{width:'150px'}}
   >
    <MenuItem value="">Select Category</MenuItem>
    <MenuItem value={1}>Items1</MenuItem>
    <MenuItem value={2}>Items2</MenuItem>
    <MenuItem value={3}>Items3</MenuItem>
    <MenuItem value={4}>Items4</MenuItem>
    <MenuItem value={5}>Items5</MenuItem>
   </Select>
  )
}
export default FilterCategory;