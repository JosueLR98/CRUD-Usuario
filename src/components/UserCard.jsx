import React from "react";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className=" border-gray-600/50 border-[2px] flex flex-col hover:scale-[1.1]">
      <div>
        <img
          className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md "
          src={user.image_url ? user.image_ur : "/images/notProfile.jpg"}
          alt="User image"
        />
      </div>
      <h3 className=" flex justify-center mx-2 border-b-2 font-semibold border-gray-300  text-[15px]">
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li className=" pl-2">
          <h4 className="text-gray-500/80 uppercase  pt-1">Correo</h4>
          <span className="font-medium">{user.email}</span>
        </li>
        <li>
          <h4 className="text-gray-500/80 uppercase pl-2  pt-1">Cumpleaños</h4>
          <span className="flex flex-row items-center gap-1 pl-2">
            <i className="bx bx-gift text-[21px] "></i>
            <b className="text-[13px] font-semibold">{user.birthday}</b>
          </span>
        </li>
      </ul>
      <div className="flex justify-end gap-3 pr-2">
        <button className="pb-5" onClick={() => deleteUser(user.id)}>
          <i className="bx bxs-trash  bg-red-500  text-white  p-1 px-[9px] text-lg rounded-md"></i>
        </button>
        <button className="pb-5" onClick={() => handleClickEdit(user)}>
          <i className="bx bx-pencil bg-transparent  border-[1px] border-[#BDBDBD] text-[#D3D3D3]  p-[3px] px-[8px] text-lg rounded-md "></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
