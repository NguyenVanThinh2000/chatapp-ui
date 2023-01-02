import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Username", { required: true })} />
        {errors.Username && <span>This field is required</span>}

        <input type="email" {...register("Email", { required: true })} />
        {errors.Email && <span>This field is required</span>}

        <input type="password" {...register("Password", { required: true })} />
        {errors.Password && <span>This field is required</span>}
        <input
          type="password"
          {...register("ConfirmPassword", { required: true })}
        />
        {errors.ConfirmPassword && <span>This field is required</span>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
