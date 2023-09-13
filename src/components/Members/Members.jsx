/* eslint-disable react/prop-types */
import Member from "../Member/Member";
const Members = ({ members , handleAdd}) => {

    console.log(" Members ", members);

    return (
        <div className="w-2/3  text-center text-3xl">
            <h1>ALl Members</h1>

            <div className="grid grid-cols-3 gap-4 ">
                {

                    members.map(member =>
                        <Member
                            key={member.id}
                            member={member}
                            handleAdd={handleAdd}
                        ></Member>
                    )

                }
            </div>




        </div>
    );
};

export default Members;