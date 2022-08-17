import Image from 'next/image';
import PageListAuth from '../components/PageListAuth';
import PageHeader from '../components/PageHeader';

export default function Hello(){
  return(
    <>      
      <div className='bg-popLightGrey w-full min-h-screen text-sm text-popBlack pt-6 px-4'>
        <PageHeader />
        <div id="ContentContainer"
        className="flex mt-4">
          <div id="ContentContainerLeft"
          className="flex-grow max-w-[924px]">
            <div id="PanelGreeting"
            className="bg-white p-7 rounded-xl mb-4">
              <p className="text-[26px] font-serif text-popMidGray mb-4">
                Hi,
                <span className="text-popBlack"> Hamdi</span>
              </p>
              <p className="font-medium">Let’s see how much you are earning with Poplar today</p>
            </div>            
            <div id="PanelSetup"
            className="bg-white px-7 pb-7 rounded-xl mb-4">
              <div className="flex border-b -mx-7 mb-4 px-7 pb-3 pt-3 place-content-between items-center">
                <h3 className="text-[21px] font-medium">Poplar Setup</h3>
                <div className="flex items-center place-content-center rounded-full border-2 w-[50px] h-[50px]">0/3</div>
              </div>

              <div className="flex">
                <div className="w-1/3 bg-popPanelGrey rounded-xl">
                  <div className="border-b p-4 flex">
                    <span className="block w-10 h-10 border border-gray-300 rounded-full mr-3"></span>
                    <h4>Submit Documentation</h4>
                  </div>
                  <p>Please allow 3-5 business days for your documents to be reviewed. In the meantime feel free to explore the app!</p>
                </div>
                <div className="w-1/3">
                  <div>
                    <span></span>
                    <h4>Connect your bank accounts</h4>
                  </div>
                  <p>Connect your bank accounts and discover your idle cash.</p>
                </div>
                <div className="w-1/3">
                  <div>
                    <span></span>
                    <h4>Deposit and start yielding</h4>
                  </div>
                  <p>Deposit money and start yielding every minute!</p>
                </div>
              </div>
              <div className="flex place-content-end">
                <button className='rounded-lg block bg-popGreen text-white font-semibold text-base py-3 px-4 mt-5'>Submit Documentation</button>
              </div>
            </div>
          </div>
          <div id="ContentContainerRight"></div>
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
                  <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="First name" />
                </div>
              </div>

              <div className="md:ml-3">
                <div className='mt-6'>
                  <label>Last name</label>
                </div>
                <div>
                  <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="Last name" />
                </div>
              </div>
            </div>

            <div className="md:flex">
            <div className="md:mr-3">
                <div className='mt-6'>
                  <label>Country code</label>
                </div>
                <div>
                  <select className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray min-w-[133px]">
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
                  <input className="bg-popInputGray w-full rounded-lg py-3 px-2 text-base mt-2 border border-popInputGray" type="text" placeholder="Phone" />
                </div>
              </div>
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

            <div className="mt-6 mb-14">
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