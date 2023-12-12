import type {MetaFunction} from '@remix-run/node';
import Navbar from '~/components/navbar';
import {ChevronDown} from 'lucide-react';

export const meta: MetaFunction = () => {
  return [
    {title: 'New Remix App'},
    {name: 'description', content: 'Welcome to Remix!'},
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className={'h-[calc(100vh-74px)] grid place-items-center relative'}>
          <div className={'relative'}>
            <div aria-hidden={true} className={'absolute inset-0 z-[-1]'}>
              <span
                className={
                  'bg-green-200 w-[300px] h-[300px] rounded-full blur-3xl absolute top-1/2 transform -translate-y-1/2'
                }></span>
              <span
                className={
                  'bg-blue-200 w-[300px] h-[300px] rounded-full blur-3xl top-1/2 absolute left-1/2 transform -translate-y-1/2'
                }></span>
            </div>
            <p className={'text-[24px] text-center'}>Sandra Gonzalez</p>
            <h1
              className={
                'pt-[10px] pb-[15px] text-[82px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-400'
              }>
              Senior Designer
            </h1>
            <ul className={'flex justify-between text-[16px]'}>
              <li>UI/UX desgin</li>
              <li>Design systems</li>
              <li>Mobile/Web apps</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div
            className={'absolute flex flex-col items-center bottom-2 left-1/2'}>
            Scroll
            <ChevronDown />
          </div>
        </section>
        <section className={'container mx-auto py-[85px]'}>
          <h2 className={'text-center text-[42px]'}>Porfolio</h2>
          <article className={'pt-[85px] pb-[150px]'}>
            <img
              src="/flowbank_trading_app/flowbank_trading_app_4x.webp"
              alt="App de trading flowbank"
              className={'rounded'}
            />
            <h3>App de trading Flowbank</h3>
            <h4>Design system / UI/UX design / User testing</h4>
          </article>

          <div className={'grid grid-cols-2 gap-4'}>
            <div className={'even:pt-[250px]'}>sad</div>
            <div className={'even:pt-[250px]'}>cvgf</div>
            <div className={'even:pt-[250px]'}>fdgt</div>
            <div className={'even:pt-[250px]'}>fdgdf</div>
          </div>
        </section>
        <section className={'container mx-auto'}>
          <h2 className={'text-[42px]'}>A propos</h2>
        </section>
      </main>
    </>
  );
}
