import Image from 'next/image';
import PageListAuth from '../components/PageListAuth';

export default function Hello(){
  return(
    <>
      <div className='bg-popLightGrey w-full min-h-screen flex flex-col place-content-center items-center text-sm text-popBlack'>
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
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popErrorRed" type="text" placeholder="Email" />
              <div className="text-xxs text-popErrorRed">Error message is here</div>
            </div>
            <div className='mt-6'>
              <label>Password</label>
            </div>
            <div>
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popErrorRed" type="text" placeholder="Password" />
              <div className="text-xxs text-popErrorRed">Error message is here</div>
            </div>
            <div className="text-right my-3">
              <a className='text-base text-popMidGray' 
              href="/forgot-password">Forgot password</a>
            </div>
            <div>
              <button className='rounded-lg block bg-popGreen text-white font-semibold text-base p-3 w-full mt-5'
              >Log In</button>
            </div>
          </form>
        </div>

        <div className="text-center mt-10 xs:mt-16 text-popMidGray font-medium">
          <div className="mb-3">Don't have an account?</div>
          <div>
            <a className="text-popLinkBlue font-semibold"
            href="#">Create an account</a>
          </div>
        </div>

      </div>
      <PageListAuth />
    </>
  );
}