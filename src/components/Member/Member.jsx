/* eslint-disable react/prop-types */

const Member = ({ member,handleAdd }) => {
    console.log(member);
    const { image, name, salary } = member;
    return (
        <div>
            <div className="card bg-gray-400 shadow-xl p-[10px] mt-[50px]">
                <figure className="flex justify-center h-[100px]">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Salary : {salary}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleAdd(member)}>Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Member;