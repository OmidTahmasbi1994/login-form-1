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
    <div className="bg-[url(./assets/bg.png)] bg-fixed bg-cover bg-no-repeat min-h-screen flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center px-30 py-10 bg-green-75 backdrop-blur-md border-solid border-1 border-gray-400 rounded-2xl shadow-gray-700 shadow-2xl max-sm:w-[80%] max-sm:px-3 max-sm:py-6"
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
        <h1 className="mb-11 text-2xl text-gray-800 font-bold capitalize max-sm:text-sm max-sm:mb-5">
          sign in
        </h1>
        <form
          className="flex flex-col justify-center items-center gap-5 max-sm:w-full max-sm:gap-2"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <input
            type="text"
            placeholder="full name:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-[80%] max-sm:h-[35px] max-sm:text-[13px]"
            {...register("fullName")}
          />
          <input
            type="text"
            placeholder="email:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-[80%] max-sm:h-[35px] max-sm:text-[13px]"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="password:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-[80%] max-sm:h-[35px] max-sm:text-[13px]"
            {...register("password")}
          />
          <input
            type="text"
            placeholder="confirm password:"
            className="bg-gray-100 w-50 pl-2 py-1 text-xs rounded-md outline-none border-solid border-1 border-gray-4 text-gray-800 focus:bg-gray-200 max-sm:w-[80%] max-sm:h-[35px] max-sm:text-[13px]"
            {...register("confirmPassword")}
          />
          <input
            type="submit"
            value="Login"
            className="border-solid border-1 border-gray-900 px-8 py-1 rounded-3xl cursor-pointer text-gray-900 font-semibold max-sm:text-sm max-sm:px-5 max-sm:py-1.5 max-sm:mt-2"
          />
        </form>
        <div className="mt-6 capitalize max-sm:mt-5 max-sm:flex max-sm:flex-col max-sm:items-center">
          <span className="text-sm text-gray-900 max-sm:text-sm">do you forget your password? </span>
          <span className="text-md text-gray-900 underline cursor-pointer max-sm:text-sm">click here</span>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
