import Image from 'next/image';
import PageListAuth from '../components/PageListAuth';

export default function Hello(){
  return(
    <>
      <div className='bg-popGrey100 w-full min-h-screen flex flex-col items-center text-sm text-popBlack700 pt-12'>
        <div className="mb-8 xs:mb-14">
          <Image src='/poplar-logo-text.svg' width='147' height='51' />
        </div>

        <div className='container max-w-xs xs:max-w-md sm:max-w-lg bg-white rounded-xl p-6 xs:p-10 font-medium'>
          <h1 className="font-serif text-2xl xs:text-3xl mb-2">Signup for Poplar</h1>
          <form action="#">

            <div className="md:flex">
              <div className="md:mr-3">
                <div className='mt-6'>
                  <label>First name</label>
                </div>
                <div>
                  <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="First name" />
                </div>
              </div>

              <div className="md:ml-3">
                <div className='mt-6'>
                  <label>Last name</label>
                </div>
                <div>
                  <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Last name" />
                </div>
              </div>
            </div>

            <div className="md:flex">
            <div className="md:mr-3">
                <div className='mt-6'>
                  <label>Country code</label>
                </div>
                <div>
                  <select className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150 min-w-[133px]">
                    <option value="">Code</option>
                    <option value="">+1</option>
                    <option value="">+91</option>
                  </select>
                </div>
              </div>

              <div className="md:ml-3 md:flex-grow">
                <div className='mt-6'>
                  <label>Phone</label>
                </div>
                <div>
                  <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Phone" />
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <label>Email</label>
            </div>
            <div>
              <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Email" />
            </div>

            <div className='mt-6'>
              <label>Company name</label>
            </div>
            <div>
              <input className="bg-popGrey150 w-full rounded-lg py-3 px-2 text-base mt-2 border border-popGrey150" type="text" placeholder="Company name" />
            </div>

            <div className="mt-6 mb-14">
              <label className="flex">
                <input className="border border-popGreen400 rounded mr-3"
                type="checkbox" />
                <span>I accept the Poplar <a className="text-popBlue400" href="#">Terms of Use</a> and <a className="text-popBlue400" href="#">Privacy Policy</a>.</span>
              </label>
            </div>

            <div>
              <button className='rounded-lg block bg-popGreen400 text-white font-semibold text-base p-3 w-full mt-5'
              >Start</button>
            </div>

          </form>
        </div>

        
        <div className="text-center mt-12 mb-20">
          <a className="text-popBlue400 font-semibold inline-flex  text-base underline"
          href="/login">Already have an account?</a>
        </div>

      </div>

      <PageListAuth />
    </>
  );
}