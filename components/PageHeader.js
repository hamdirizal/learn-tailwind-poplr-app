import Image from 'next/image';

export default function(){
  return (
    <div className='bg-white rounded-xl py-4 px-7 font-medium w-full flex items-center place-content-between'>
      <div className="flex font-medium text-base items-center">
        <div>
          <Image src='/poplar-logo-image-only.svg' width='36' height='58' />
        </div>
        <nav className="ml-12"> 
          <a className="mr-10 font-semibold"
            href="#">Dashboard</a>
          <a className="mr-10"
            href="#">Deposit</a>
          <a className="mr-10"
            href="#">Widthdawal</a>
          <a className="mr-10"
            href="#">Forecaster</a>
        </nav>
      </div>
      <div className="flex items-center">
        <a className="mr-14"  href="#">
          <Image src='/icon-notification-outlined.svg' width='24' height='24' />
        </a>
        <div>Hamdi Rizal</div>
        <div className="ml-4">
          <a href="#"><Image src='/icon-person-outlined.svg' width='52' height='52' /></a>
        </div>
      </div>          
    </div>
  );
}