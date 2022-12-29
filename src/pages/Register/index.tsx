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

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
