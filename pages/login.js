import Image from 'next/image';
import PageListAuth from '../components/PageListAuth';

export default function Hello(){
  return(
    <>
      <div className='bg-popGrey100 w-full min-h-screen flex flex-col place-content-center items-center text-sm text-popBlack700'>
        <div className="mb-8 xs:mb-14">
          <Image src='/poplar-logo-text.svg' width='147' height='51' />
        </div>

        <div className='container max-w-xs xs:max-w-md bg-white rounded-xl p-6 xs:p-10 font-medium'>
          <h1 className="font-serif text-2xl xs:text-3xl mb-4 xs:mb-9">Log in</h1>
          <form action="#">
          <div className='mt-6'>
              <label>Email</label>
            </div>
            <div>
              <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Email" />
            </div>
            <div className='mt-6'>
              <label>Password</label>
            </div>
            <div>
              <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Password" />
            </div>
            <div className="text-right my-3">
              <a className='text-base text-popGrey400' 
              href="/forgot-password">Forgot password</a>
            </div>
            <div>
              <button className='rounded-lg block bg-popGreen400 text-white font-semibold text-base p-3 w-full mt-5'
              >Log In</button>
            </div>
          </form>
        </div>

        <div className="text-center mt-10 xs:mt-16 text-popGrey400 font-medium">
          <div className="mb-3">Don't have an account?</div>
          <div>
            <a className="text-popBlue400 font-semibold"
            href="/signup">Create an account</a>
          </div>
        </div>

      </div>

      <PageListAuth />
    </>
  );
}