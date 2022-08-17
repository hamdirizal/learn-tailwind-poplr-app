import Image from 'next/image';
import PageListAuth from '../components/PageListAuth';

export default function Hello(){
  return(
    <>
      <div className='bg-popLightGrey w-full min-h-screen flex flex-col items-center text-sm text-popBlack pt-12'>
        <div className="mb-8 xs:mb-14">
          <Image src='/poplar-logo-text.svg' width='147' height='51' />
        </div>

        <div className='container max-w-xs xs:max-w-md bg-white rounded-xl p-6 xs:p-10 font-medium'>
          <h1 className="font-serif text-2xl xs:text-3xl mb-4 xs:mb-9">Signup for Poplar</h1>
          <form action="#">

            <div className='mt-6'>
              <label>First name</label>
            </div>
            <div>
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="First name" />
            </div>

            <div className='mt-6'>
              <label>Last name</label>
            </div>
            <div>
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="Last name" />
            </div>

            <div className='mt-6'>
              <label>Country code</label>
            </div>
            <div>
              <select className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray">
                <option value="">Select Code</option>
                <option value="">+1</option>
                <option value="">+91</option>
              </select>
            </div>

            <div className='mt-6'>
              <label>Phone</label>
            </div>
            <div>
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="Phone" />
            </div>

            <div className='mt-6'>
              <label>Email</label>
            </div>
            <div>
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="Email" />
            </div>

            <div className='mt-6'>
              <label>Company name</label>
            </div>
            <div>
              <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="Company name" />
            </div>

            <div className="mt-6">
              <label className="flex">
                <input className="border border-popGreen rounded mr-3"
                type="checkbox" />
                <span>I accept the Poplar <a className="text-popLinkBlue" href="#">Terms of Use</a> and <a className="text-popLinkBlue" href="#">Privacy Policy</a>.</span>
              </label>
            </div>

            <div>
              <button className='rounded-lg block bg-popGreen text-white font-semibold text-base p-3 w-full mt-5'
              >Start</button>
            </div>

          </form>
        </div>

        
        <div className="text-center mt-12 mb-20">
          <a className="text-popLinkBlue font-semibold inline-flex  text-base underline"
          href="/login">Already have an account?</a>
        </div>

      </div>

      <PageListAuth />
    </>
  );
}