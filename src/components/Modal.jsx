import React from "react";

const Modal = ({
  isShowForm,
  setIsShowForm,
  register,
  handleSubmit,
  submit,
  reset,
  setIsUserIdToEdit,
  errors,
  isUserIdToEdit,
}) => {
  const handleClickCloseModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      image_url: "",
    });
    setIsUserIdToEdit(null);
  };
  return (
    <section
      className={` fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${
        isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className=" relative bg-white p-4 w-[300px]"
      >
        <h3 className="font-bold text-2xl">
          {isUserIdToEdit ? "Editar usuario" : "Nuevo usuario"}
        </h3>
        <div className="grid gap-1">
          <label htmlFor="first_name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            className="border[1px] rounded-sm bg-gray-100 p-1 "
            id="name"
            type="text"
            {...register("first_name", {
              required: "Este campo es obligatorio",
              maxLength: {
                value: 25,
                message: "Maximo de caracteres 25",
              },
              minLength: {
                value: 2,
                message: "Minimo de caracteres 2",
              },
            })}
          />
        </div>
        <span className=" text-red-400 text-[13px]">
          {errors.first_name && errors.first_name.message}
        </span>
        <div className="grid gap-1">
          <label htmlFor="last_name">
            Apellidos <span className="text-red-500">*</span>
          </label>
          <input
            className="border[1px] rounded-sm bg-gray-100 p-1 "
            id="last_name"
            type="text"
            required
            {...register("last_name", {
              required: "Este campo es obligatorio",
              maxLength: {
                value: 25,
                message: "Maximo de caracteres 25",
              },
              minLength: {
                value: 2,
                message: "Minimo de caracteres 2",
              },
            })}
          />
        </div>
        <span className=" text-red-400 text-[13px]">
          {errors.last_name && errors.last_name.message}
        </span>
        <div className="grid gap-1">
          <label htmlFor="email">
            Correo <span className="text-red-500">*</span>
          </label>
          <input
            className="border[1px] rounded-sm bg-gray-100 p-1 "
            id="email"
            type="email"
            required
            {...register("email", {
              required: "Este campo es obligatorio",
              maxLength: {
                value: 150,
                message: "Maximo de caracteres 150",
              },
              minLength: {
                value: 2,
                message: "Minimo de caracteres 2",
              },
              pattern: {
                value:
                  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: "El correo ingresado no tiene un formato valido",
              },
            })}
          />
        </div>
        <span className=" text-red-400 text-[13px]">
          {errors.email && errors.email.message}
        </span>
        <div className="grid gap-1">
          <label htmlFor="password">Contraseña </label>
          <input
            className="border[1px] rounded-sm bg-gray-100 p-1 "
            id="password"
            type="password"
            required
            {...register("password")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="birthday">Cumpleaños</label>
          <input
            className="border[1px] rounded-sm bg-gray-100 p-1 "
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="imagen_url">URLimagen</label>
          <input
            className="border[1px] rounded-sm bg-gray-100 p-1 "
            id="image_url"
            type="text"
            {...register("image_url", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                message: "Url para imágenes es invalido.",
              },
            })}
          />
          <span>{errors.image_url && errors.image_url.message}</span>
        </div>
        <i
          onClick={handleClickCloseModal}
          className="bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer"
        ></i>
        <button className="bg-purple-p text-white p-2 mt-2 hover:bg-purple-p/90 transition-colors text-sm">
          {isUserIdToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
