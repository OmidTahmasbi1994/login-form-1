import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver } from '@hookform/resolvers/yup'

function App() {
  const schema = yup.object().shape({
    fullname: yup.string().required() ,
    email: yup.string().email().required() ,
    password: yup.string().matches(/[a-zA-Z]/).matches(/\d/).matches(/[@._$-]/).required() ,
    confirmPassword: yup.string().oneOf([yup.ref('password')]).required()
  })
  const { register, handleSubmit } = useForm({resolver: yupResolver(schema)});
  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[url(./assets/bg.png)] bg-fixed bg-cover bg-no-repeat p-10 min-h-screen flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center px-30 py-10 bg-green-75 backdrop-blur-md border-solid border-1 border-gray-400 rounded-2xl shadow-gray-700 shadow-2xl max-sm:px-5 max-sm:py-3"
        initial={{
          opacity: 0,
          scale:0.9
        }}
        animate={{
          opacity: 1,
          scale:1
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
      >
        <h1 className="mb-11 text-2xl text-gray-800 font-bold capitalize max-sm:text-xs max-sm:mb-5">
          sign in
        </h1>
        <form
          className="flex flex-col justify-center items-center gap-5 max-sm:gap-2"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <input
            type="text"
            placeholder="full name:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-33 max-sm:text-[8px]"
            {...register("fullName")}
          />
          <input
            type="text"
            placeholder="email:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-33 max-sm:text-[8px]"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="password:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-33 max-sm:text-[8px]"
            {...register("password")}
          />
          <input
            type="text"
            placeholder="confirm password:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-33 max-sm:text-[8px]"
            {...register("confirmPassword")}
          />
          <input
            type="submit"
            value="Login"
            className="border-solid border-1 border-gray-900 px-8 py-1 rounded-3xl cursor-pointer text-gray-900 font-semibold max-sm:text-[10px] max-sm:px-4 max-sm:py-0.5"
          />
        </form>
        <div className="mt-6 capitalize max-sm:mt-3 max-sm:flex max-sm:flex-col max-sm:items-center">
          <span className="text-sm text-gray-900 max-sm:text-[9px]">do you forget your password? </span>
          <span className="text-md text-gray-900 underline cursor-pointer max-sm:text-[10px]">click here</span>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
