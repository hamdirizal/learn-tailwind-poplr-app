import Image from 'next/image';
import PageListAuth from '../components/PageListAuth';

export default function Hello(){
  return(
    <>
      <div className='bg-popGrey100 w-full min-h-screen flex flex-col items-center text-sm text-popBlack700 pt-12'>
        <div className="mb-8 xs:mb-14">
          <Image src='/poplar-logo-text.svg' width='147' height='51' />
        </div>

        <div className='container max-w-xs xs:max-w-md bg-white rounded-xl p-6 xs:p-10 font-medium'>
          <div className='text-center mb-3'>
            <Image src="/icon-badge-exclamation.svg" width="48" height="48" />
          </div>
          <h1 className="font-serif text-2xl xs:text-3xl mb-4 xs:mb-9 text-center">Forgot Password?</h1>
          <form action="#">
          <div className='mt-6'>
              <label>Email</label>
            </div>
            <div>
              <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Email" />
            </div>
            <div>
              <button className='rounded-lg block bg-popGreen400 text-white font-semibold text-base p-3 w-full mt-5'
              >Reset password</button>
            </div>
          </form>

          <div className="text-center mt-12">
            <a className="text-popGrey400 font-medium inline-flex"
            href="/login">
              <Image src="/icon-arrow-left-grey.svg" width="21" height="21" />
              <span className="ml-2">Back to log in</span></a>
          </div>
        </div>

      </div>

      <PageListAuth />
    </>
  );
}