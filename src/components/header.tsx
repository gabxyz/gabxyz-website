import Link from 'next/link';
import clsx from 'clsx';
import { Github, Twitter } from 'lucide-react';
import Tooltip from '@/components/tooltip';
import ThemePopover from '@/components/theme-popover';

const Header = () => {
  return (
    <header className='sticky top-0 z-10 border-b border-grayA-6 bg-grayA-3 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-3xl items-center justify-between p-4'>
        <Link
          href='/'
          className={clsx(
            'text-lg font-bold md:text-xl',
            'bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-transparent',
            'hover:opacity-80 motion-safe:duration-300 motion-safe:ease-productive-standard'
          )}
        >
          gabxyz
        </Link>
        <div className='flex items-center gap-3.5'>
          <Tooltip content='twitter'>
            <a
              className={clsx(
                'cursor-pointer text-gray-11',
                'hover:text-gray-12 hover:opacity-80',
                'motion-safe:duration-300 motion-safe:ease-productive-standard'
              )}
              aria-label='twitter profile'
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/gabxyzdev'
            >
              <Twitter size={18} />
            </a>
          </Tooltip>
          <Tooltip content='github'>
            <a
              className={clsx(
                'cursor-pointer text-gray-11',
                'hover:text-gray-12 hover:opacity-80',
                'motion-safe:duration-300 motion-safe:ease-productive-standard'
              )}
              aria-label='github profile'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/gabxyz'
            >
              <Github size={18} />
            </a>
          </Tooltip>
          <ThemePopover />
        </div>
      </div>
    </header>
  );
};

export default Header;
