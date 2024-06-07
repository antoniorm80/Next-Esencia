import RecoverPasswordPage from "./components/recover-password.form";

const ForgotPage = () => {
  return ( 
    <div className = "pt-10 lg:p-8 flex items-center md:h-[70vh]" >
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <RecoverPasswordPage/>
    </div>
</div>
   );
}
 
export default ForgotPage;
