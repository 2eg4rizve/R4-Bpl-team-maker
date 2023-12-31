/* eslint-disable react/prop-types */

import Cart from "../Cart/Cart";



const Carts = ({ cartsMember ,totalCost ,remaining,handleDelete}) => {

    return (
        <div className="w-[200px] md:w-[300px] bg-green-200 text-center">
            <h1 className="text-center text-3xl mb-[20px]">Carts</h1>
            <h1 className="text-2xl mb-[20px]">Total  Carts Member : {cartsMember.length}</h1>

            {
                cartsMember.map(member =>
                    <Cart
                        key={member.id}
                        member={member}
                        handleDelete={handleDelete}

                    ></Cart>

                )

            }

            <h1 className="mt-[50px] font-bold">Total Cost : {totalCost}</h1>
            <h1 className="mt-[10px] font-bold">Remaining : {remaining}</h1>



        </div>
    );
};

export default Carts;