import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users, handleClickEdit, deleteUser }) => {
  return (
    <section className="grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center">
      {users?.map((user) => (
        <UserCard key={user.id} user={user} handleClickEdit={handleClickEdit} deleteUser={deleteUser} />
      ))}
    </section>
  );
};

export default UsersList;
