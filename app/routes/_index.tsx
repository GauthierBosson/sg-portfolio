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
          <div>
            <p className={'text-[24px] text-center'}>Sandra Gonzalez</p>
            <h1
              className={
                'pt-[10px] pb-[15px] text-[82px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-400'
              }>
              Senior Designer
            </h1>
            <ul className={'flex gap-10 text-[16px]'}>
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
      </main>
    </>
  );
}
