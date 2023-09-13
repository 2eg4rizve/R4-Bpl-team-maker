/* eslint-disable react/prop-types */

import Cart from "../Cart/Cart";
import Member from "../Member/Member";


const Carts = ({ cartsMember }) => {

    return (
        <div className="w-[300px] bg-green-200 text-center">
            <h1 className="text-center text-3xl mb-[20px]">Carts</h1>
            <h1 className="text-2xl">Total  Carts Member : {cartsMember.length}</h1>

            {
                cartsMember.map(member =>
                    <Cart
                        key={member.id}
                        member={member}


                    ></Cart>

                )

            }



        </div>
    );
};

export default Carts;