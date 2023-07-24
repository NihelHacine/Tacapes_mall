import React from 'react'
import { useSelector } from 'react-redux'
import AddBoutique from './AddBoutique';
import Table from 'react-bootstrap/Table';
import { deleteboutique} from '../redux/boutiqueSlice';
import { useDispatch } from 'react-redux';
import EditBoutique from './EditBoutique';

function BoutiqueListadmin({boutique,ping,setping,props}) {
    const user = useSelector((state)=>state.user?.user);
    const isAuth = localStorage.getItem('token');
    const boutiques= useSelector((state)=> state.boutique?.boutiquelist);
    console.log(boutiques);
    const dispatch= useDispatch();
  return (
    <>
    {(isAuth&&user?.role === "admin")? (      
    <div className='boutiqu_list'>
        <div className='add'>
        <AddBoutique ping={ping} setping={setping}/>
        <div className="container">
        
     <Table className='table' striped="columns">
      <thead>
        <tr>
          <th className='cln_table'>Shop_name</th>
          <th className='cln_table'>Shop_proprietaire</th>
          <th className='cln_table'>Shop_adresse </th>
          <th className='cln_table'>Shop_image</th>
          <th className='cln_table'>Shop_category</th>
          <th className='cln_table'> <svg className='img_svg'
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
    </svg></th>
    <th className='cln_table'>  <svg className='img_svg'
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
    </svg></th>
         
          
        </tr>
      </thead>

            {boutiques?.map((el)=> (<tr>
          <td className='cln_table'>{el?.name}</td>
          <td className='cln_table'>{el?.proprietaire}</td>
          <td className='cln_table'>{el?.adresse} </td>
          <td className='cln_table'> <img className='img_table' src= {el?.image} alt='' ></img></td>
          <td className='cln_table'>{el?.category}</td>
          <td className='cln_table'> <EditBoutique boutique={el} ping={ping} setping={setping}/> </td>
          <td className='cln_table'> <button className='btn_delete' style={{backgroundColor:'red'}} onClick={()=>{dispatch(deleteboutique(el._id)); setping(!ping)}}> X </button></td>
        </tr>)
        )}
        </Table>
        </div>
    </div>
    </div>
):(<div><center><img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" width={'80%'} height={'auto'} style={{ width:"80%", height:"auto"}} /></center></div>)}
    </>

  )
}

export default BoutiqueListadmin