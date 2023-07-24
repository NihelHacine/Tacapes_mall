import React from 'react'
import { useSelector } from 'react-redux'

function Orderlist() {
    const orders = useSelector((state) => state.order?.order);
    const user = useSelector((state) => state.user?.user);
    const commandes = orders?.filter((el) => el?.current_user === user?.email);
    console.log(commandes)
  return (
    <div >
        {commandes?.map((el)=> (
          <div>
        <div className='order'>
          <div><h4>Commande ref :</h4> <br/>{el?._id}</div>
          <div><h4>fullname :</h4><br/> {el?.user_fullname}</div>
          <div><h4>Adresse :</h4><br/> {el?.user_adress}</div>
          <div><h4>GSM :</h4><br/> {el?.user_gsm}</div>
          <div><h4>Articles commandés :</h4> <br/> {el?.orderItems.map((item)=> (<div>{item.name}({item.cartQuantity})</div>))}</div>
          <div><h4>Date validation :</h4><br/> {el?.date_v}</div>
          <div><h4>Etat de la commande :</h4><br/> {el?.orderStatus}</div>


          </div>
          <hr width={'80%'}/>
        </div>
        
        ))}
        <hr width={'80%'}/>
    </div>
  )
}

export default Orderlist