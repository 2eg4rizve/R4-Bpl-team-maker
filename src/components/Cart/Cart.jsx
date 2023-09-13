/* eslint-disable react/prop-types */

const Cart = ({ member, handleDelete }) => {
    return (
        <div className="flex gap-4  ml-[10px] mb-[50px]">

            <h1 className="">{member.name}</h1>
            <p>{member.salary}</p>

            <button className="btn btn-primary  " onClick={() => handleDelete(member)}>Delete</button>




        </div>
    );
};

export default Cart;